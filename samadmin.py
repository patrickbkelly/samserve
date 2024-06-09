#!/usr/bin/env python
from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import logging
import socket
from logging.handlers import SysLogHandler
#from html import unescape
import json
import urllib
import uuid
from simple_salesforce import Salesforce
import datetime
import csv
#import magic  # file encoding
import urllib.parse
import pysftp
import pprint
import requests
import ssl
import sys
import xml.etree.ElementTree as ET
import os.path
import traceback
import linecache


# Importing socket library 
import socket 

MODE="Operational"
#MODE="Testing"

APPNAME = "samadmin"
SERVERPORT = 8044

SFUSERID = 'sampleserver@gmail.com'
SFPASSWORD = 'Elementis99!'
SFTOKEN = 'IL2QFK6DNJiI9hA5XDWr3wXp'
SFTASKOWNER = '0056N0000016CgpQAE'
SFORG='00D1t000000rvew'

CMCPRODDATAFILENAME = 'tblELEMProductList.txt'
TALCPRODDATAFILENAME = 'talc_sample_products.txt'
PRODDATAPATH='data/prod/'
reverse_products = {}

PAPERTRAIL_HOST = 'logs6.papertrailapp.com'
PAPERTRAIL_ID = 35326

BLANK_PRODUCTS = { 'CMC-Americas': '', 'CMC-AP':'', 'CMC-EU':'', 'TALC':'' }
BLANK_SF_PRODUCTS = { 'CMC-Americas': [], 'CMC-AP':[], 'CMC-EU':[], 'TALC':[] }
products = BLANK_PRODUCTS
sfProducts = BLANK_SF_PRODUCTS
found_products = BLANK_PRODUCTS
product_file_mapping = { 'CT': 'CMC-Americas', 'AP':'CMC-AP', 'EU':'CMC-EU', 'TALC':'TALC' }
region_mapping = { 'Americas': 'CMC-Americas', 'Asia Pacific':'CMC-AP',  'AP':'CMC-AP',  'EU':'CMC-EU','Europe/Middle East/Africa':'CMC-EU', 'TALC':'TALC' }
sf_region_mapping = { 'Americas': 'Americas', 'AP': 'Asia Pacific', 'Asia Pacific': 'Asia Pacific', 'EU':'Europe/Middle East/Africa', 'Europe/Middle East/Africa':'Europe/Middle East/Africa', 'TALC':'TALC' }
reverse_products = {}
region_warehouse_mapping = { 'Americas': 'CT', 'Asia Pacific' : 'AP', 'Europe/Middle East/Africa': 'EU' }

ORDERDATAPATH='data/ToCMC/'

CMC_SFTP_SERVER='sftp.chemicalmarketing.com'
CMC_SFTP_PORT=2222

CMC_PRODUCTION_USER='ElementisFTP_PRD'
CMC_PRODUCTION_PASSWORD='ElemCmC20!9'

CMC_TEST_USER='ElementisFTP_TEST'
CMC_TEST_PASSWORD='ElemCmC20!9'

CMC_USER=CMC_PRODUCTION_USER
CMC_PASSWORD=CMC_PRODUCTION_PASSWORD

SEND_TO_CMC=True

pp = pprint.PrettyPrinter(indent=4)

server_status={
    'version': 'v1.0',
    'start_time': None,
    'last_refresh': None,
    'today': {
        'errors': 0,
        'warnings': 0,
        'web_requests': 0,
        'requests_added_to_SF': 0,
        'data_errors_from_SF': 0,
        'requests_sent_to_CMC': 0,
        'num_products': 0,
        'num_downloads': 0
        },
    'since_start': {
        'errors': 0,
        'warnings': 0,
        'web_requests': 0,
        'requests_added_to_SF': 0,
        'data_errors_from_SF': 0,
        'requests_sent_to_CMC': 0,
        'num_products': 0,
        'num_downloads': 0
        }
    }

class ContextFilter(logging.Filter):
    hostname = socket.gethostname()

    def filter(self, record):
        record.hostname = ContextFilter.hostname
        return True

class MyServer(BaseHTTPRequestHandler):

    def end_headers(self):
        self.send_my_headers()
        BaseHTTPRequestHandler.end_headers(self)

    def send_my_headers(self):
        logger.info( "send headers" )
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Expose-Headers", "Content-Length, X-JSON")
        self.send_header("Access-Control-Allow-Credentials", "true")
        self.send_header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST")
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Authorization, Content-Type, Accept, x-prototype-version")

    def do_OPTIONS(self):           
        logger.info( "do options" )
        self.send_response(200, "ok")
        self.end_headers()

    def do_HEAD(self):
        logger.info( "do head" )
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

    def do_GET(self):
        try:
            resp = ""
            r1 = urllib.parse.parse_qs(self.path)
            logger.info('GET request: {} - {} from {}'.format(self.path, r1, self.client_address ) )
            if 'prodsearch?' in self.path:
                r1 = urllib.parse.parse_qs(self.path)
                options = ''
                if 'region' in r1:
                    try:
                        region = r1['region'][0]
                        country = r1['country'][0]
                        if region in region_mapping:
                            options = products[ region_mapping[region] ] + products[ 'TALC' ]
                            logger.info( 'product search: {} {} {}'.format(self.path, region_mapping[region], country ) )
                            resp = '<select id="selectedProduct" name="selectedProduct" class="textfield" style="width:500px"><option name="- Choose -" value=" ">- Choose -</option>'+options+'</option>'
                        else:
                            resp = '<select id="selectedProduct" name="selectedProduct" class="textfield" style="width:500px"><option name="- Choose -" value=" ">- Please Select Region -</option>'
                            reversed_dns = socket.gethostbyaddr(self.client_address[0])
                            logger.info('Page Request from {} ({})'.format(reversed_dns[0], self.client_address[0] ))
                    except Exception as e:
                        logger.warning( 'Error {} serving {} ({})'.format(r1, str(e), self.path[1:]) )

                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))


            elif 'op/get/cmc/products' in self.path:
                resp = get_CMC_product_file()+'\n'
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))

            elif 'products' in self.path:
                r1 = urllib.parse.parse_qs(self.path)
                options = ''
                logger.info( 'products request: {} {} {}'.format(self.path, r1, r1['region'][0] ) )
                if 'region' in r1:
                    try:
                        region = r1['region'][0]
                        array = sfProducts[ region_mapping[region] ] + sfProducts[ 'TALC' ]
                        logger.info( 'products: {} {} '.format(self.path, len(array) ) )
                        resp = json.dumps(array)    
                        
                    except Exception as e:
                        logger.warning( 'Region {} not found {} serving ({})'.format(r1, str(e), self.path[1:]) )
                        server_status['today']['warnings'] += 1

                self.send_response(200)
                self.send_header('Content-type','json')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))

            elif 'op/resend/cmc/request' in self.path:
                try:
                    urlparts = self.path[1:].split('?')
                    params = urlparts[1]
                    r1 = urllib.parse.parse_qs(params)
                    request_xml_file = r1['file'][0]
                    logger.info( 'resending request: {} {} {}'.format(self.path, r1, request_xml_file ) )

                    resend_CMC_request(request_xml_file)

                    resp = 'ok'
                    self.send_response(200)
                    self.send_header('Content-type','json')
                    self.end_headers()
                    self.wfile.write(resp.encode('utf-8'))
                    logger.info( 'SUCCESS resending request: {} {} {}'.format(self.path, r1, request_xml_file ) )
                except Exception as e:
                    resp = 'ERROR in resend/cmc/request {}'.format(str(e) ) 
                    log_error( resp )
                    self.send_response(200)
                    server_status['today']['warnings'] += 1

            elif 'op/reset/send/status' in self.path:
                try:
                    urlparts = self.path[1:].split('?')
                    params = urlparts[1]
                    r1 = urllib.parse.parse_qs(params)
                    request_guid = r1['guid'][0]
                    logger.info( 'reseting request: {}'.format( request_guid ) )

                    reset_sent_requests_status(request_guid)

                    resp = 'ok'
                    self.send_response(200)
                    self.send_header('Content-type','json')
                    self.end_headers()
                    self.wfile.write(resp.encode('utf-8'))
                    logger.info( 'SUCCESS reseting request status' )
                except Exception as e:
                    resp = 'ERROR in reset/send/status {}'.format(str(e) ) 
                    log_error( resp )
                    self.send_response(200)
                    server_status['today']['warnings'] += 1


            elif 'op/process/report' in self.path:
                try:
                    urlparts = self.path[1:].split('?')
                    params = urlparts[1]
                    r1 = urllib.parse.parse_qs(params)
                    report_xml_file = r1['file'][0]
                    logger.info( 'process report: {} {} {}'.format(self.path, r1, report_xml_file ) )

                    process_CMC_report(report_xml_file)

                    resp = 'ok'
                    self.send_response(200)
                    self.send_header('Content-type','json')
                    self.end_headers()
                    self.wfile.write(resp.encode('utf-8'))
                except Exception as e:
                    resp = 'ERROR in process/report {}'.format(str(e) ) 
                    logger.warning( resp )
                    self.send_response(200)
                    server_status['today']['warnings'] += 1

            elif 'api/submitRequest' in self.path:
                logger.error( 'submit received as GET {}'.format(self.path) )
                self.submit()

            elif 'op/status' in self.path:
                resp = pp.pformat(server_status)+'\n'
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))

            elif 'op/ping' in self.path:
                resp = 'OK\n'
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))            

            elif 'op/checkapprovals' in self.path:
                resp = check_for_approvals()+'\n'
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))

            elif 'op/check/cmc/requests' in self.path:
                resp = check_cmc_requests()+'\n'
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))

            elif 'op/get/cmc/report' in self.path:
                logger.info('GET report from CMC' )
                resp = get_report()+'\n'
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))

            elif 'op/refresh' in self.path:
                try:
                    refresh_check()
                    resp = 'refresh requested. status:{}\n'.format(pp.pformat(str(server_status)))
                    logger.info( resp )
                    self.send_response(200)
                except Exception as e:
                    resp = 'ERROR in refresh {}'.format(str(e) ) 
                    logger.warning( resp )
                    self.send_response(200)
                    server_status['today']['warnings'] += 1
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write(resp.encode('utf-8'))

            elif not self.path == '/':
                if "Testing" in MODE:
                    self.send_response(200)
                    self.send_header("Content-type", "text/html")
                    self.end_headers()
                    self.wfile.write(bytes("<html><head><title>Sample Server</title></head>", "utf-8"))
                    self.wfile.write(bytes("<body>", "utf-8"))
                    self.wfile.write(bytes("<h1>{} {} {}</h1>".format( "Server in ", MODE, " Mode.  Please come back in 1-2 hours."), "utf-8"))
                    self.wfile.write(bytes("<p>Request: {}</p>".format( self.path), "utf-8"))
                    self.wfile.write(bytes("<p>Request Received.</p>", "utf-8"))
                    self.wfile.write(bytes("</body></html>", "utf-8"))
                else:
                    try:
                        urlparts = self.path[1:].split('?')
                        filename = urlparts[0]
                        logger.info('Serving page {}'.format(filename))
                        file = open(filename, 'rb') 
                        self.send_response(200)
                        self.send_header("Content-type", "text/html")
                        self.end_headers()
                        obj = file.read()
                        self.wfile.write(obj) 
                    except Exception as e:
                        logger.warning('{} serving ({})'.format(str(e), self.path[1:]) )
                        server_status['today']['warnings'] += 1
            else:          
                self.send_response(200)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                self.wfile.write(bytes("<html><head><title>Sample Server</title></head>", "utf-8"))
                self.wfile.write(bytes("<p>Request: {}</p>".format( self.path), "utf-8"))
                self.wfile.write(bytes("<body>", "utf-8"))
                self.wfile.write(bytes("<p>Request Received.</p>", "utf-8"))
                self.wfile.write(bytes("</body></html>", "utf-8"))

        except Exception as e:
            exc_type, exc_obj, tb = sys.exc_info()
            lineno = tb.tb_lineno

            logger.error( 'ERROR {} AT {} serving ({})'.format( sys.exc_info()[0], lineno, self.path[1:]) )
            server_status['today']['errors'] += 1


    def do_POST(self):
        logger.info('POST request: {} {}'.format(self.path, self.headers['Content-Type']))
        response_code=500
        if 'x-www-form-urlencoded' in self.headers['Content-Type'] or 'json' in self.headers['Content-Type']:
            reqid = str(uuid.uuid4())
            reqtime = datetime.datetime.now()
#            reqdt = reqtime.date()
            content_length = int(self.headers['Content-Length'])
            payload = self.rfile.read(content_length)
            json_data = json.loads(payload)
            request_string = 'Sample Request('+reqid+') received at '+ reqtime.isoformat() + json.dumps(json_data) + '\n' 
            logger.info('POST request: {}'.format(request_string))
            
            for attribute in json_data:
                if json_data[attribute] == '':
                    value = 'no data'
                else:
                    value = json_data[attribute]
                request_string = request_string + (attribute + ':  ').ljust(30) + value + '\n'
            result = {}
            try:
                sf=connect_salesforce()
                sf_object={
                    'OwnerId': SFTASKOWNER,
                    'Address_Line_1__c': json_data['address1'],
                    'Address_Line_2__c': json_data['address2'],
#                    'Applications__c': json_data['applicationtypes'],
                    'Carrier__c': json_data['carrier'],
                    'City__c': json_data['city'],
                    'Comments__c': json_data['comments'],
                    'Company_Name__c': json_data['companyName'],
                    'Country__c': json_data['country'],
                    'CurrencyIsoCode': 'USD',
#                    'Decision_Role__c': json_data['sample_decision_role'],
#                    'Decision_Timeframe__c': json_data['sample_decision_timeframe'],
#                    'Desired_Support__c': json_data['sample_desired_support'],
                    'Email_Address__c': json_data['emailAddress'],
#                    'End_Use__c': json_data['enduse'] + ' ' + json_data['enduseother'],
                    'First_Name__c': json_data['firstName'],
                    'Job_Title__c': json_data['jobtitle'],
                    'Last_Name__c': json_data['lastName'],
                    'Market__c': json_data['market'],
                    'Phone_Number__c': json_data['phone'],
                    'RawRequest__c': json.dumps(json_data),
                    'Region__c': sf_region_mapping[json_data['regionLocated']],
                    'Remote_Address__c': json_data['remote_addr'],
                    'Sample_Request_GUID__c': reqid,
                    'Name': json_data['firstName'] + ' ' + json_data['lastName']+'('+reqid+')',
                    'Expedite_Shipping__c': ('Air' in json_data['carrier']),
                    'Shipping_Account_Number__c': json_data['shipAcctnum'],
                    'State__c': json_data['state'],
                    'Status__c': 'Open',
                    'Zip__c': json_data['zip']
                }
                logger.info( 'Salesforce request object: {}'.format(str(sf_object)  ) )
                result = sf.Sample_Request__c.create(sf_object)
                logger.info( 'Salesforce response object: {}'.format(str(result)  ) )
                print( 'result', result['success'] )
                if result['success']:
                    logger.info( 'Salesforce processing objects' )
                    i = 0 
                    request = result['id']
                    while True:
                        i = i+1
                        if i > 1:
                            suffix = str(i)
                            logger.info( 'Subsequent product' )
                        else:
                            suffix = ''
                            logger.info( 'First product' )
                        
                        if 'selectedProduct'+suffix not in json_data:
                            if suffix == '':
                                logger.error( 'selectedProduct NOT in JSON data.  Failing.'  )
                            break
                        else:
                            logger.info( 'Product data found' )
                        
                        product_attributes = json_data['selectedProduct'+suffix].split('|')
                        product_code = product_attributes[0]
                        product_name = product_attributes[1]
                        
                        sf_object = {
                            'OwnerId': SFTASKOWNER,
#                            'Annual_Use__c': json_data['sample_annual_use'+suffix],
                            'Product_Code__c': product_code,
                            'Name': product_name,
                            'Quantity__c': json_data['qtyRequested'+suffix],
                            'Sample_Request__c': request
                            }
                        logger.info( 'Salesforce product object: {}'.format(str(sf_object) ) )
                        result = sf.Request_Product__c.create(sf_object)
                        logger.info('product insert result: {}'.format(str(result)))
                    else:
                        logger.error('FAILURE on product insert result: {}'.format(str(result)))

                payload = { "ids": [ request ] }
                result = sf.apexecute('api/samplerequest', method='POST', data=payload)
                logger.info('api call result: {}'.format(str(result)))

                response_code=200
                message_string = 'Request received('+reqid+')' 
                response_message = { "message": message_string, "ref": reqid }
                logger.info( response_message )
                disconnect_salesforce(sf)

            except Exception as e:
                logger.error( "ERROR Adding SF Req" )
                exc_type, exc_obj, tb = sys.exc_info()
#                f = tb.tb_frame
                lineno = tb.tb_lineno
                print( 'result', result )
                response_code=500
                logger.error( "ERROR: {} at line {} Adding Req ({}) to salesforce".format( str(e), lineno, reqid ) )
                message_string = 'Error occurred.  Please contact Customer Support.' 
                response_message = { "message": message_string }
                server_status['today']['errors'] += 1
        else:
                message_string = 'Error - json data missing.' 
                logger.error( message_string )
                response_message = { "message": message_string }
                server_status['today']['errors'] += 1

        self.send_response(response_code)
        self.end_headers()
        self.wfile.write(bytes(json.dumps(response_message),encoding='utf8'))


    def submit(self):
        logger.info( "submit" )


# Function to display hostname and 
# IP address 
def get_Host_name_IP(): 
    try: 
        host_name = socket.gethostname() 
        host_ip = socket.gethostbyname(host_name) 
        logger.info("Hostname :  {} ".format(host_name) )
        logger.info("IP : {} ".format(host_ip)) 
    except: 
        logger.error("Unable to get Hostname and IP") 

def disconnect_salesforce(sf):
    logger.info( "Disconnecting from Salesforce" )
    return None

###
# Salesforce
#
#

def connect_salesforce():
    try:
        logger.info( "Connecting to Salesforce" )
    #        sf = Salesforce(username='patrickbkelly@gmail.com.uat', password='Imigty88!')
        sf = Salesforce(password=SFPASSWORD, username=SFUSERID, security_token=SFTOKEN, organizationId=SFORG )
        logger.info( "SUCCESS Connecting to Salesforce - " )
        return sf
    except Exception as e:
        logger.error( "{} Connecting to Salesforce".format( str(e)) )
        return None



###
# CRON Operations
#
#
def refresh_check():
    dt = datetime.datetime.now().date()
    if server_status['last_refresh'] != dt:
        refresh()
        for attribute in server_status['today']:
            if attribute in server_status['since_start']:
                server_status['since_start'][attribute] = server_status['since_start'][attribute] + server_status['today'][attribute]
            server_status['today'][attribute] = 0
        server_status['last_refresh'] = dt
        logger.info('refresh check true')
    else:
        logger.info('refresh check false')


def refresh():
    logger.info("refreshing products")
    refresh_products()
    server_status['last_refresh']=dt
    logger.info('{} {} Ready..'.format(APPNAME, server_status['version']))


def get_CMC_product_file():
    logger.info("getting product file")
    myopts = pysftp.CnOpts()
    myopts.hostkeys = None
    srv = pysftp.Connection(
        host=CMC_SFTP_SERVER, 
        port=CMC_SFTP_PORT,
        username=CMC_USER,
        password=CMC_PASSWORD,
        cnopts=myopts)
    with srv.cd('ToElementis'):
        data = srv.listdir()
        if 'tblELEMProductList.txt' in data:
            logger.info('getting new product file from CMC')
            try:
                srv.get( 'tblELEMProductList.txt', 'data/prod/tblELEMProductList.txt')
                server_status['today']['num_downloads']+=1
            except Exception as e:
                logger.error( "{} SFTP Product file".format(str(e)) )

    srv.close()
    result = 'files from CMC:'
    for l in data:
        result += '{}, '.format(l)

    logger.info('{}'.format(result))
    return result


def refresh_products():
    global products
    global sfProducts


    reset_products()
#    read_products( 'Talc', TALCPRODDATAFILENAME )
    read_products( 'CMC', CMCPRODDATAFILENAME )

#    logger.info( "TALC products loaded {}".format( sfProducts[ 'TALC'] ) )

    for cat in products:
        logger.info('{}: {}'.format(cat, len(products[cat]) ) )


def reset_products():
    global server_status
    global products
    global sfProducts
    global reverse_products
    global found_products
    
    server_status['today']['num_products'] = 0
    products = BLANK_PRODUCTS
    sfProducts = BLANK_SF_PRODUCTS
    reverse_products = {}
    found_products = BLANK_PRODUCTS

def read_products( name, filename ):
    global server_status
    global products
    global sfProducts
    global reverse_products
    global found_products
    product_count = 0 

    try:
        logger.info( "Reading {} Products from {}..".format( name, filename )  )
        print( "Reading {} Products from {}..".format( name, filename )  )
        with open(PRODDATAPATH+filename, "r") as csvfile:
            reader = csv.DictReader(csvfile)
            data_list = list(reader)
            res = sorted(data_list, key=lambda x: x['ProductName'])
            for row in res:
                product_index = product_file_mapping[row['CMCLoc']]
                if row['Prodcode'] not in found_products[product_index]:
                    product_count += 1
                    server_status['today']['num_products'] += 1
                    concat_name = '{} | {}'.format(row['Prodcode'], row['ProductName'])
                    options = ' <option name="{}" value="{}">{}</option>'.format( concat_name, concat_name, row['ProductName'] ) 
                    sfproduct = { "product_code": row['Prodcode'], "product_name": row['ProductName'] }
                    products[product_index] += options
                    sfProducts[product_index].append( sfproduct )
                    found_products[product_index] += ( ' ' + row['Prodcode'] )
                    if row['CMCLoc'] != 'TALC':
                        reverse_products[row['Prodcode']] = {"whse": row['CMCLoc'], "prodcode":row['Prodcode'], "name": row['ProductName']}

    except Exception as e:
        exc_type, exc_obj, tb = sys.exc_info()
        f = tb.tb_frame
        lineno = tb.tb_lineno
        filename = f.f_code.co_filename
        error_string = "ERROR({}-{} at line {}) Reading Products".format(sys.exc_info()[0],str(e), lineno)
        print( "{}  line: {}".format(error_string, lineno ) )
        logger.error( error_string )

    logger.info( '{} products loaded from {}.'.format( product_count, filename ) )


def get_report():
    try:
        myopts = pysftp.CnOpts()
        myopts.hostkeys = None
        srv = pysftp.Connection(
            host=CMC_SFTP_SERVER, 
            port=CMC_SFTP_PORT,
            username=CMC_USER,
            password=CMC_PASSWORD,
            cnopts=myopts)
        with srv.cd('ToElementis'):
            reqdt = datetime.datetime.now().date()
            filename = 'CMCSamples_{}{:0>2d}{:0>2d}.xml'.format(reqdt.year, reqdt.month, reqdt.day-1)
            logger.info('checking for report file({}) from CMC'.format(filename))
            data = srv.listdir()
            for l in data:
                local_xml_file = 'data/reports/{}'.format(l)
                if filename in l:
                    logger.info('getting new report file({}) from CMC'.format(l))
                    try:
                        reqdt = datetime.datetime.now().date()
                        srv.get( l, local_xml_file)
                        process_CMC_report(local_xml_file)
                        server_status['today']['num_downloads']+=1
                    except Exception as e:
                        logger.error( "{} SFTP Product file".format(str(e)) )
                else:
                    logger.info('found file({}) from CMC'.format(l))
                    srv.get( l, local_xml_file )
        srv.close()
        return( 'OK' )
                    
                    
    except Exception as e:
        log_error( 'getting cmc report')
    finally:
        srv.close()
        return( 'ERROR' )



def check_cmc_requests():
    myopts = pysftp.CnOpts()
    myopts.hostkeys = None
    cnt=0
    srv = pysftp.Connection(
        host=CMC_SFTP_SERVER, 
        port=CMC_SFTP_PORT,
        username=CMC_USER,
        password=CMC_PASSWORD,
        cnopts=myopts)
    with srv.cd('ToCMC'):
#        reqdt = datetime.datetime.now().date()
        data = srv.listdir()
        for l in data:
            cnt+=1
            logger.info('found file({}) in ToCMC'.format(l))

    return(str(cnt))

def check_for_approvals():
    try:
        sf = connect_salesforce()
        query =  "SELECT  " + \
            " Id, Sample_Request_GUID__c, shipment_status__c, Status__c, "+ \
            " Company_Name__c, "+ \
            " First_Name__c, Last_Name__c, Job_Title__c,Phone_Number__c, Email_Address__c, "+ \
            " Address_Line_1__c, Address_Line_2__c,City__c, State__c,Zip__c, Country__c,Region__c, "+ \
            " Applications__c,  "+ \
            " Carrier__c, Shipping_Account_Number__c, "+ \
            " Opportunity__c, Comments__c, OwnerId"+ \
            " FROM Sample_Request__c "+ \
            " WHERE Status__c =  'Approved' "+ \
            "   and shipment_status__c = '' "+ \
            " LIMIT 1"

        sent = 0
        result = sf.query(query)
        for request in result['records']:
            logger.info('Checking request: {}/{} '.format(request['Sample_Request_GUID__c'], request['Id']))
            if not request['Address_Line_1__c']:
                logger.warning('Missing Address for Id: {} '.format(request['Id']))
                server_status['today']['data_errors_from_SF'] += 1
                sf.Sample_Request__c.update(request['Id'],{ 'shipment_status__c': 'Data Error', 'Data_Processing_Notes__c': 'Missing Address for Id: {} '.format(request['Id']) })	
            else:
                product_query =  "SELECT  " + \
                    " Id, OwnerId, Annual_Use__c, Product_Code__c, Name, Quantity__c " +\
                    " FROM Request_Product__c "+ \
                    " WHERE Sample_Request__c = '"+request['Id']+"'"
                product_result = sf.query(product_query)
                
                owner_query =  "SELECT  " + \
                    " Id, Name, SenderEmail " +\
                    " FROM User "+ \
                    " WHERE Id = '"+request['OwnerId']+"'"
                owner_result = sf.query(owner_query)
                
                if product_result['totalSize'] > 0 and owner_result['totalSize'] > 0:
                    sendit = True
                    errors = ''
                    for product in product_result['records']:
                        if product['Product_Code__c'] not in reverse_products:
                            errors = '{} not a CMC product.  NOT sending request {}.'.format(product['Product_Code__c'], request['Sample_Request_GUID__c'])
                            logger.warning( errors )
                            sendit = False
                    if sendit:
                        if send_request_to_CMC( sf, request, product_result['records'], owner_result['records'][0]):
                            sent += 1
                            server_status['today']['requests_sent_to_CMC'] += 1
                            sf.Sample_Request__c.update(request['Id'],{ 'shipment_status__c': 'Sent to CMC' })
                            logger.info('Sent Request Id: {} ({}) to CMC'.format(request['Sample_Request_GUID__c'], request['Id']))
                        else:
                            append_data_notes(sf, request['Id'], 'Error Sending' )
                    else:
                        append_data_notes(sf, request['Id'], 'NOT Sending' )
                else:
                    append_data_notes(sf, request['Id'], 'No Products found' )

            logger.info('\n\nRequest: \nID:{}\nGUID:{}\nShip Status:{}\nStatus:{}\n{}'.format( request['Id'], request['Sample_Request_GUID__c'], request['shipment_status__c'], request['Status__c'],request))
    except Exception:
        exc_type, exc_obj, tb = sys.exc_info()
        lineno = tb.tb_lineno
        logger.error( "{} check approvals ERROR at line {}".format(sys.exc_info()[0], lineno) )

    disconnect_salesforce(sf)
    return('Found {} approved requests.  Sent {} to CMC'.format(result['totalSize'], sent) )

## procedure to update Data_Processing_Notes__c to blank 
## and shipment_status__c to 'Sent To CMC' for requests 
## that have already been sent
def reset_sent_requests_status(id):
    try:
        sf = connect_salesforce()
        sf.Sample_Request__c.update(id, { 'shipment_status__c': 'Sent to CMC', 'Data_Processing_Notes__c': '' })	

    except Exception:
        exc_type, exc_obj, tb = sys.exc_info()
        lineno = tb.tb_lineno
        logger.error( "{} reset sent requests ERROR at line {}".format(sys.exc_info()[0], lineno) )

    disconnect_salesforce(sf)
    return('Reset sent requests' )

def append_data_notes(sf, id, new_note ):
    try:
        query =  "SELECT Data_Processing_Notes__c, Sample_Request_GUID__c " + \
                        " FROM Sample_Request__c "+ \
                        " WHERE Id = '"+id+"'"
        result = sf.query(query)
        if result['totalSize'] > 0:
            guid = result['records'][0]['Sample_Request_GUID__c']
            old_notes = result['records'][0]['Data_Processing_Notes__c']
            logger.error('{} for request {} '.format( guid, new_note))
            if old_notes:
                if new_note not in old_notes:
                    sf.Sample_Request__c.update(id,{ 'shipment_status__c': 'Data Error', 'Data_Processing_Notes__c': old_notes+'\n'+new_note })	
            else:
                sf.Sample_Request__c.update(id,{ 'shipment_status__c': 'Data Error', 'Data_Processing_Notes__c': new_note })	
        else:
            logger.error('append_data_notes - No Request found: {} '.format(id))

    except Exception:
        log_error( 'append_data_notes')

def create_xml_file( sf, filename, request, products, owner ):
    try:
        logger.info('Creating XML for {}'.format( request['Sample_Request_GUID__c'] )  )
        success = False

        if os.path.isfile(filename):
            msg = 'File {} EXISTS.  NOT rewriting.'.format( filename )
            logger.error( msg  )
            append_data_notes(sf, request['Id'], msg )
        else:
            logger.info('Writing xml file {}'.format( filename )  )
            # potentially null attributes
            carrier_acct = request['Shipping_Account_Number__c'] if request['Shipping_Account_Number__c'] else ''
            carrier = request['Carrier__c'] if request['Carrier__c'] else ''
            address_2 = request['Address_Line_2__c'] if request['Address_Line_2__c'] else ''
            comments=request['Comments__c'] if request['Comments__c'] else ''
            ownername = owner['Name'] if 'Name' in owner else ''
            owneremail = owner['SenderEmail'] if 'SenderEmail' in owner else ''

            xml_data = '<?xml version="1.0" encoding="UTF-8"?>\n<ns0:Order xmlns:ns0="urn:cmc.com:OI028:Customer:SampleOrdersFromSFToCMC">' 
            xml_data += '\n<ElementisOrder>' 
            xml_data += '\n   <OrderID>{}</OrderID>'.format(request['Sample_Request_GUID__c']) 
            xml_data += '\n    <DeliveryNum></DeliveryNum>' 
            xml_data += '\n    <CompanyName1>{}</CompanyName1>'.format(request['Company_Name__c']) 
            xml_data += '\n    <CustRefNumber>{}</CustRefNumber>'.format(request['Sample_Request_GUID__c']) 
            xml_data += '\n    <CustContact>{} {}</CustContact>'.format(request['First_Name__c'],request['Last_Name__c']) 
            xml_data += '\n    <EmailAddress>{}</EmailAddress>'.format(request['Email_Address__c']) 
            xml_data += '\n    <Phone>{}</Phone>'.format(request['Phone_Number__c']) 
            xml_data += '\n    <Address1>{}</Address1>'.format(request['Address_Line_1__c']) 
            xml_data += '\n    <Address2>{}</Address2>'.format(address_2) 
            xml_data += '\n    <City>{}</City>'.format(request['City__c']) 
            xml_data += '\n    <State>{}</State>'.format(request['State__c']) 
            xml_data += '\n    <PostalCode>{}</PostalCode>'.format(request['Zip__c']) 
            xml_data += '\n    <Country>{}</Country>'.format(request['Country__c']) 
            xml_data += '\n    <Region>{}</Region>'.format(request['Region__c']) 
            xml_data += '\n    <Comments>{}</Comments>'.format(comments) 
            xml_data += '\n    <RequestorName>{}</RequestorName>'.format(ownername) 
            xml_data += '\n    <RequestorEMail>{}</RequestorEMail>'.format(owneremail) 
            xml_data += '\n    <SalesName></SalesName>' 
            xml_data += '\n    <SalesEmail></SalesEmail>' 
            xml_data += '\n    <CustomerCarrierName>{}</CustomerCarrierName>'.format(carrier) 
            xml_data += '\n    <CarrierAcct>{}</CarrierAcct>'.format(carrier_acct)
            xml_data += '\n</ElementisOrder>'

            exp_prods = 0
            num_prods = 0
            for product in products:
                exp_prods = exp_prods + 1 
                if product['Product_Code__c'] not in reverse_products:
                    logger.error('Product {} ({}) not a CMC product'.format(product['Name'],product['Product_Code__c'] ))
                else:
                    num_prods = num_prods + 1
                    xml_data += '\n<ElementisItem>'
                    xml_data += '\n   <ItemID>{}</ItemID>'.format(product['Id'])
                    xml_data += '\n   <ProductCode>{}</ProductCode>'.format(product['Product_Code__c'])
                    xml_data += '\n   <ProductName>{}</ProductName>'.format(product['Name']) 
                    xml_data += '\n   <Qty>{}</Qty>'.format(str(product['Quantity__c'])) 
                    xml_data += '\n   <Size>EA</Size>' 
                    xml_data += '\n   <ItemNotes></ItemNotes>'
                    xml_data += '\n   <SourcingWarehouse>{}</SourcingWarehouse>'.format(region_warehouse_mapping[request['Region__c']]) 
                    xml_data += '\n</ElementisItem>' 

            if num_prods == exp_prods:
                xml_data += '\n</ns0:Order>'
                xml_data.replace(" & ", " &amp;amp; ")
                file = open(filename,'w', encoding='utf-8') 
                file.write(xml_data)  
                file.close()  
                success = True

    except Exception:
        log_error( 'XML creation')

    return(success)   

def resend_CMC_request( xml_file_name ):
    success = "Sending"
    try:
        myopts = pysftp.CnOpts()
        myopts.hostkeys = None
        srv = pysftp.Connection(
            host=CMC_SFTP_SERVER, 
            port=CMC_SFTP_PORT,
            username=CMC_USER,
            password=CMC_PASSWORD,
            cnopts=myopts)
        with srv.cd('ToCMC'):
            srv.put( xml_file_name)
            success = "OK"
            logger.info( "{} SFTP Send Success".format(xml_file_name) )
    except Exception as e:
        success = "FAIL"
    finally:
        srv.close()
    return( success )


def send_request_to_CMC(sf, request, products, owner):
    try:
        logger.info('Sending {} for {} to CMC with {} products '.format( request['Sample_Request_GUID__c'], owner['Name'], len(products) )  )
        success = False

        xml_file_name = ORDERDATAPATH+'T'+request['Sample_Request_GUID__c']+'.xml'
        success = create_xml_file( sf, xml_file_name, request, products, owner )
        
        if success:
            if not SEND_TO_CMC:
                append_data_notes(sf, request['Id'], 'NOT Sending to CMC.  SEND_TO_CMC={} '.format(SEND_TO_CMC) )
            else:
                logger.info('Sending {} because SEND_TO_CMC is true'.format(xml_file_name))
                try:
                    myopts = pysftp.CnOpts()
                    myopts.hostkeys = None
                    srv = pysftp.Connection(
                        host=CMC_SFTP_SERVER, 
                        port=CMC_SFTP_PORT,
                        username=CMC_USER,
                        password=CMC_PASSWORD,
                        cnopts=myopts)
                    with srv.cd('ToCMC'):
                        srv.put( xml_file_name)
                        success = True
                        logger.info( "{} SFTP Send Success".format(xml_file_name) )
                except Exception as e:
                    append_data_notes(sf, request['Id'], "{} SFTP Send ERROR".format(str(e)) )
                    success = False
                finally:
                    srv.close()
        else:
            logger.info('NO file: {}'.format(xml_file_name))

    except Exception as e:
        exc_type, exc_obj, tb = sys.exc_info()
        lineno = tb.tb_lineno
        logger.error( "{} send_request_to_CMC ERROR at line {}".format(sys.exc_info()[0], lineno) )

    return (success)

def process_CMC_report(report_xml_file):
    logger.info('CMC report file:{}'.format( report_xml_file ) )

    sf=connect_salesforce()
    tree = ET.parse(report_xml_file)
    root = tree.getroot()

    for order in root.findall('ElementisOrder'):
        guid = str(order.find('OrderID').text)
        cmc_order_id = str(order.find('CMCOrderID').text)
        ship_source = order.find('ShipFromWarehouse').text

        if len(guid) == 36: 
            logger.info('Found SF Order ID:{} CMCId:{} '.format(guid, cmc_order_id ) )
            try:
                query =  "SELECT Id "+ \
                    " FROM Sample_Request__c "+ \
                    " WHERE Sample_Request_GUID__c = '"+ guid + "'" \
                    " LIMIT 1 "

                result = sf.query(query)
                if len(result['records']) != 1:
                    logger.error('SF Order NOT found: {}'.format( guid ) )
                else:
                    open_count = 0 
                    ship_count = 0 
                    sfOrderId = result['records'][0]['Id']
                    product_query =  "SELECT  " + \
                        " Id, Name, Product_Code__c " +\
                        " FROM Request_Product__c "+ \
                        " WHERE Sample_Request__c = '"+sfOrderId+"'"
                    product_result = sf.query(product_query)
                    sf_products = {}
                    for product in product_result['records']:
                        sf_products[product['Product_Code__c']] = product['Id']

                    data_notes = ''
                    for product in order.findall('ElementisSample'):
                        product_code = product.find('ProductCode').text
                        product_name = product.find('ProductName').text
                        product_status = product.find('Status').text
                        product_status_note = product.find('StatusNote').text
                        product_ship_date = product.find('ShipDate').text
                        product_tracking_number = product.find('TrackingNumber').text
                        if product_status == 'OPEN':
                            open_count = open_count + 1
                        elif product_status == 'SHIPPED':
                            ship_count = ship_count + 1

                        if product_code in sf_products:
                            #logger.info('found CMC product {}({}) in SF'.format(product_name, product_code))
                            sf.Request_Product__c.update(sf_products[product_code], { 
                                'Ship_Notes__c': product_status_note, 
                                'Ship_Status__c': product_status,
                                'Tracking_Number__c': product_tracking_number, 
                                'Ship_Date__c': product_ship_date })
                        else:
                            msg = 'DID NOT find CMC product {}({}) in SF'.format(product_name, product_code)
                            logger.warn(msg)
                            data_notes = data_notes + msg

                    if open_count > 0:
                        if ship_count > 0:
                            order_status = 'Partial Shipment'
                        else:
                            order_status = 'At CMC'
                    else:
                        if ship_count > 0:
                            order_status = 'Sent to Customer'

                    logger.info('Order guid:{} id:{} status:{}'.format(guid, sfOrderId, order_status) )
                    sf.Sample_Request__c.update(sfOrderId,{ 
                        'shipment_status__c': order_status, 
                        'Shipping_Source__c': ship_source,
                        'CMC_Order_ID__c': cmc_order_id, 
                        'Data_Processing_Notes__c': data_notes })


            except Exception as e:
                log_error( 'Processing report')

        else:
            print('Non-SF Order', guid )
 
    disconnect_salesforce(sf)

def log_error( context ):
    exc_type, exc_obj, tb = sys.exc_info()
    f = tb.tb_frame
    lineno = tb.tb_lineno
    filename = f.f_code.co_filename
    linecache.checkcache(filename)
    line = linecache.getline(filename, lineno, f.f_globals)
    logger.error( '{} - EXCEPTION AT LINE {} "{}"): {}'.format(context, lineno, line.strip(), exc_obj) )


###
# Main Loop
#
#

if __name__ == "__main__":        
    print('Starting..')
    syslog = SysLogHandler(address=(PAPERTRAIL_HOST, PAPERTRAIL_ID))
    syslog.addFilter(ContextFilter())

    format = '%(asctime)s %(hostname)s %(filename)s: %(message)s'
    formatter = logging.Formatter(format, datefmt='%b %d %H:%M:%S')
    syslog.setFormatter(formatter)

    logger = logging.getLogger()
    logger.addHandler(syslog)
    logger.setLevel(logging.INFO)
    logger.info("**************************************************************")
    logger.info("{} {} starting".format(APPNAME, server_status['version']))

    hostname = socket.gethostname()
    webServer = HTTPServer((hostname, SERVERPORT), MyServer)
#    webServer.socket = ssl.wrap_socket( webServer.socket, certfile='server-chain.pem', keyfile="key.pem", server_side=True)
    logger.info("Server started http://{}:{}".format(hostname, SERVERPORT))
    
    logger.info("getting server IP")
    get_Host_name_IP() #Function call 

    logger.info("getting server IP")
    sf=connect_salesforce()
    disconnect_salesforce(sf)

    dt = datetime.datetime.now().date()
    server_status['start_time']=dt

    logger.info("refresh check")
    refresh_check()

#    logger.info("checking for approvals")
#    check_for_approvals()

    print('{} {} Ready..'.format(APPNAME, server_status['version']))

    while True:
        try:
            webServer.serve_forever()
        
        except KeyboardInterrupt:
            logger.info("Keyboard Interrupt..")
            break

        except Exception:
            exc_type, exc_obj, tb = sys.exc_info()
            f = tb.tb_frame
            lineno = tb.tb_lineno
            filename = f.f_code.co_filename
            logger.error( "{} Server ERROR at line {}".format(sys.exc_info()[0], lineno) )


    webServer.server_close()
    logger.info("Server stopped.")