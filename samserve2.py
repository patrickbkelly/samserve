from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from starlette.responses import FileResponse

from logging.handlers import SysLogHandler
from typing import Optional
from pydantic import BaseModel
import logging
import json
import sys
import csv
import uuid
from simple_salesforce import Salesforce
import datetime
import traceback


###############################################################################
## CONSTANTS
##
SFUSERID = 'sampleserver@gmail.com'
SFPASSWORD = 'Elementis99!'
SFTOKEN = 'IL2QFK6DNJiI9hA5XDWr3wXp'
SFTASKOWNER = '0056N0000016CgpQAE'
SFORG='00D1t000000rvew'

PAPERTRAIL_HOST = 'logs6.papertrailapp.com'
PAPERTRAIL_ID = 35326

BLANK_PRODUCTS = { 'CMC-Americas': '', 'CMC-AP':'', 'CMC-EU':'', 'TALC':'' }
BLANK_SF_PRODUCTS = { 'CMC-Americas': [], 'CMC-AP':[], 'CMC-EU':[], 'TALC':[] }
CMCPRODDATAFILENAME = 'tblELEMProductList.txt'
TALCPRODDATAFILENAME = 'talc_sample_products.txt'
PRODDATAPATH='data/prod/'
#PRODDATAPATH='/Users/pbk/'

reverse_products = {}


###############################################################################
## global structures
##
product_list = BLANK_PRODUCTS
product_file_mapping = { 'CT': 'CMC-Americas', 'AP':'CMC-AP', 'EU':'CMC-EU', 'TALC':'TALC' }

sf_product_list = BLANK_SF_PRODUCTS
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



###############################################################################
## Startup
##
app = FastAPI()

origins = [
    "https://samples.elementis.com",
    "https://localhost",
    "https://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    #init logger
    global logger 

    syslog = SysLogHandler(address=(PAPERTRAIL_HOST, PAPERTRAIL_ID))
    format = '%(asctime)s %(filename)s: %(message)s'
    formatter = logging.Formatter(format, datefmt='%b %d %H:%M:%S')
    syslog.setFormatter(formatter)

    logger = logging.getLogger()
    logger.addHandler(syslog)
    logger.setLevel(logging.INFO)
    logger.info("**************************************************************")
    logger.info("Samserve {} starting".format(server_status['version']))

    #init products
    refresh_products()

    #init regions
    global region_mapping
    region_mapping = { 
        'Americas': 'CMC-Americas', 
        'Asia Pacific':'CMC-AP',  
        'AP':'CMC-AP',  
        'EU':'CMC-EU',
        'Europe/Middle East/Africa':'CMC-EU', 
        'TALC':'TALC' }

    global sf_region_mapping
    sf_region_mapping = { 
        'Americas': 'Americas', 
        'AP': 'Asia Pacific', 
        'Asia Pacific': 'Asia Pacific', 
        'EU':'Europe/Middle East/Africa', 
        'Europe/Middle East/Africa':'Europe/Middle East/Africa', 
        'TALC':'TALC' }
    #region_warehouse_mapping = { 'Americas': 'CT', 'Asia Pacific' : 'AP', 'Europe/Middle East/Africa': 'EU' }

###############################################################################
## Operations
##
## Static Files

@app.get("/favicon.ico")
async def favicon():
    response = FileResponse('/home/ec2-user/samserve/static/favicon.ico')
    return response

@app.get("/thankyou.html")
async def thankYou():
    response = FileResponse('/home/ec2-user/samserve/static/thankyou.html', media_type="text")
    return response

@app.get("/reqpage2.html")
async def reqpage2():
    response = FileResponse('/home/ec2-user/samserve/static/reqpage2.html')
    return response

@app.get("/new2.js")
async def new2():
    response = FileResponse('/home/ec2-user/samserve/static/new2.js')
    return response

###############################################################################
## Operations
##
@app.get("/op/ping")
async def ping():
    return {"message": "ping"}


###############################################################################
## Products
##  /prodsearch?openagent&region=Europe/Middle%20East/Africa&country=DE&_=
## 
@app.get("/prodsearch", response_class=HTMLResponse)
async def prodsearch(region: str = 'None', country: str = 'None'):
    global product_list
    resp = '<select id="selectedProduct" name="selectedProduct" class="textfield" style="width:500px"><option name="- Choose -" value=" ">- Please Select Region -</option>'
    if 'None' not in region:
        try:
            if region in region_mapping:
                options = product_list[ region_mapping[region] ] + product_list[ 'TALC' ]
                resp = '<select id="selectedProduct" name="selectedProduct" class="textfield" style="width:500px"><option name="- Choose -" value=" ">- Choose -</option>'+options+'</option>'
            else:
                resp = '<select id="selectedProduct" name="selectedProduct" class="textfield" style="width:500px"><option name="- Choose -" value=" ">- Please Select Region -</option>'
        except Exception as e:
            logging.error( "ERROR in prodsearch {}".format( traceback.format_exc() ))

    return resp

@app.get("/products")
async def products(region: str = 'None', country: str = 'None'):
    resp = {}
    if 'None' not in region:
        try:
            resp = sf_product_list[ region_mapping[region] ] + sf_product_list[ 'TALC' ]            
        except Exception as e:
            logger.warning( 'Region {} not found {} Country({})'.format( region, str(e), country) )
            server_status['today']['warnings'] += 1
    return resp


###############################################################################
## SubmitRequest
sample_request = {
    "remote_addr":"174.99.126.195",
    "companyName":"test",
    "jobtitle":"test",
    "firstName":"test",
    "lastName":"test",
    "emailAddress":"test@test.co",
    "phone":"1112223434",
    "address1":"test",
    "address2":"test",
    "city":"test",
    "state":"TX",
    "country":"US",
    "zip":"19355",
    "regionLocated":"Americas",
    "shipAcctnum":"",
    "carrier":" ",
    "storeinfo":"",
    "storeinfofield":"",
    "market":"Antiperspirant / Deodorant",
    "selectedProduct":"13701 | AACH-7171.",
    "qtyRequested":"1",
    "comments":"test",
    "terms_agree":"terms_agree",
    "maincontact":""
    }

class SampleRequest(BaseModel):
    remote_addr: Optional[str] = 'no data'
    companyName: Optional[str] = 'no data'
    jobtitle: Optional[str] = 'no data'
    firstName: Optional[str] = 'no data'
    lastName: Optional[str] = 'no data'
    emailAddress: Optional[str] = 'no data'
    phone: Optional[str] = 'no data'
    address1: Optional[str] = 'no data'
    address2: Optional[str] = 'no data'
    city: Optional[str] = 'no data'
    state:  Optional[str] = 'no data'
    country: Optional[str] = 'no data'
    zip: Optional[str] = 'no data'
    regionLocated: Optional[str] = 'no data' 
    shipexpedite: Optional[str] = 'no data'
    shipAcctnum: Optional[str] = 'no data'
    carrier: Optional[str] = 'no data'
    storeinfo: Optional[str] = 'no data'
    storeinfofield: Optional[str] = 'no data'
    market: Optional[str] = 'no data'
    selectedProduct: Optional[str] = 'no data'
    selectedProduct2: Optional[str] = 'no data'
    selectedProduct3: Optional[str] = 'no data'
    selectedProduct4: Optional[str] = 'no data'
    selectedProduct5: Optional[str] = 'no data'
    selectedProduct6: Optional[str] = 'no data'
    selectedProduct7: Optional[str] = 'no data'
    selectedProduct8: Optional[str] = 'no data'
    selectedProduct9: Optional[str] = 'no data'
    qtyRequested: Optional[str] = 'no data'
    qtyRequested2: Optional[str] = 'no data'
    qtyRequested3: Optional[str] = 'no data'
    qtyRequested4: Optional[str] = 'no data'
    qtyRequested5: Optional[str] = 'no data'
    qtyRequested6: Optional[str] = 'no data'
    qtyRequested7: Optional[str] = 'no data'
    qtyRequested8: Optional[str] = 'no data'
    qtyRequested9: Optional[str] = 'no data'
    comments: Optional[str] = 'no data'
    terms_agree: Optional[str] = 'no data'
    maincontact: Optional[str] = 'no data'


@app.post("/api/submitRequest")
async def submitRequest(sampleRequest: SampleRequest):
    reqid = str(uuid.uuid4())
    reqtime = datetime.datetime.now()
    request_json = sampleRequest.json()
    request_dict = sampleRequest.dict()
    request_string = 'Sample Request('+reqid+') received at '+ reqtime.isoformat() + request_json + '\n' 
    logger.info('POST request: {}'.format(request_string))

    result = {}
    try:
        sf=connect_salesforce()
        sf_object={
            'OwnerId': SFTASKOWNER,
            'Address_Line_1__c': request_dict['address1'],
            'Address_Line_2__c': request_dict['address2'],
#                    'Applications__c': request_dict['applicationtypes'],
            'Carrier__c': request_dict['carrier'],
            'City__c': request_dict['city'],
            'Comments__c': request_dict['comments'],
            'Company_Name__c': request_dict['companyName'],
            'Country__c': request_dict['country'],
            'CurrencyIsoCode': 'USD',
#                    'Decision_Role__c': request_dict['sample_decision_role'],
#                    'Decision_Timeframe__c': request_dict['sample_decision_timeframe'],
#                    'Desired_Support__c': request_dict['sample_desired_support'],
            'Email_Address__c': request_dict['emailAddress'],
#                    'End_Use__c': request_dict['enduse'] + ' ' + request_dict['enduseother'],
            'First_Name__c': request_dict['firstName'],
            'Job_Title__c': request_dict['jobtitle'],
            'Last_Name__c': request_dict['lastName'],
            'Market__c': request_dict['market'],
            'Phone_Number__c': request_dict['phone'],
            'RawRequest__c': request_json,
            'Region__c': sf_region_mapping[request_dict['regionLocated']],
            'Remote_Address__c': request_dict['remote_addr'],
            'Sample_Request_GUID__c': reqid,
            'Name': request_dict['firstName'] + ' ' + request_dict['lastName']+'('+reqid+')',
            'Expedite_Shipping__c': ('Air' in request_dict['carrier']),
            'Shipping_Account_Number__c': request_dict['shipAcctnum'],
            'State__c': request_dict['state'],
            'Status__c': 'Open',
            'Zip__c': request_dict['zip']
        }
        logger.info( 'Salesforce request object: {}'.format(str(sf_object)  ) )
        result = sf.Sample_Request__c.create(sf_object)
        logger.info( 'Salesforce response object: {}'.format(str(result)  ) )
        logger.info( 'Sample Request result {}'.format(result['success']) )
        if result['success']:
            i = 0 
            requestGuid = result['id']
            while i < 9:
                i = i+1
                if (i > 1):
                    suffix = str(i)
                else:
                    suffix = ''
                    logger.info( 'First product' )
                    if 'no data' in request_dict['selectedProduct'+suffix]:
                        logger.error( 'selectedProduct NOT in JSON data.  Failing.'  )            
                        break

                logger.info( 'Product {} - {} ({})'.format(suffix, request_dict['selectedProduct'+suffix], request_dict['qtyRequested'+suffix] ))
                if ( ( not 'no data' in request_dict['selectedProduct'+suffix] ) and ( not 'no data' in request_dict['qtyRequested'+suffix] ) and ( not request_dict['selectedProduct'+suffix] == ' ' ) ):
                    logger.info( 'Adding product {} to req {}'.format(request_dict['selectedProduct'+suffix], requestGuid ))
                    product_attributes = request_dict['selectedProduct'+suffix].split('|')
                    product_code = product_attributes[0]
                    product_name = product_attributes[1]
                    
                    sf_object = {
                        'OwnerId': SFTASKOWNER,
    #                            'Annual_Use__c': request['sample_annual_use'+suffix],
                        'Product_Code__c': product_code,
                        'Name': product_name,
                        'Quantity__c': request_dict['qtyRequested'+suffix],
                        'Sample_Request__c': requestGuid
                        }
                    logger.info( 'Salesforce product object: {}'.format(str(sf_object) ) )
                    result = sf.Request_Product__c.create(sf_object)
                    logger.info('product insert result: {} for request {}'.format(str(result), requestGuid))
        else:
            logger.error('FAILURE on product insert result: {}'.format(str(result)))

        payload = { "ids": [ requestGuid ] }
        result = sf.apexecute('api/samplerequest', method='POST', data=payload)
        logger.info('api call result: {}'.format(str(result)))

        message_string = 'Request received('+reqid+')' 
        result = { "message": message_string, "ref": reqid }
        logger.info( result )
        disconnect_salesforce(sf)

    except Exception:
        logging.error( "ERROR Adding SF Req {}".format( traceback.format_exc() ))
        message_string = 'Error occurred.  Please contact Customer Support.' 
        result = { "message": message_string }
        server_status['today']['errors'] += 1

    return result



###############################################################################
## Support Functions

def refresh_products():
    global product_list
    global sf_product_list

    reset_products()
    read_products( 'CMC', CMCPRODDATAFILENAME )

    for cat in product_list:
        logger.info('{}: {}'.format(cat, len(product_list[cat]) ) )


def reset_products():
    global server_status
    global product_list
    global sf_product_list
    global reverse_products
    global found_products
    
    server_status['today']['num_products'] = 0
    product_list = BLANK_PRODUCTS
    sf_product_list = BLANK_SF_PRODUCTS
    reverse_products = {}
    found_products = BLANK_PRODUCTS

def read_products( name, filename ):
    global server_status
    global product_list
    global sf_product_list
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
                    product_list[product_index] += options
                    sf_product_list[product_index].append( sfproduct )
                    found_products[product_index] += ( ' ' + row['Prodcode'] )
                    if row['CMCLoc'] != 'TALC':
                        reverse_products[row['Prodcode']] = {"whse": row['CMCLoc'], "prodcode":row['Prodcode'], "name": row['ProductName']}

    except Exception as e:
        logging.error( "ERROR Loading Products {}".format( traceback.format_exc() ))

    logger.info( '{} products loaded from {}.'.format( product_count, filename ) )


# Salesforce
def disconnect_salesforce(sf):
    logger.info( "Disconnecting from Salesforce" )
    return None

def connect_salesforce():
    try:
        logger.info( "Connecting to Salesforce" )
        sf = Salesforce(password=SFPASSWORD, username=SFUSERID, security_token=SFTOKEN, organizationId=SFORG )
        logger.info( "SUCCESS Connecting to Salesforce - " )
        return sf
    except Exception as e:
        logger.error( "{} Connecting to Salesforce".format( str(e)) )
        return None
