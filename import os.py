import os
import json

from typing import List

from fastapi import FastAPI, Request, Response
from fastapi.templating import Jinja2Templates
from starlette.responses import RedirectResponse

import pymssql

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# Get the environment variables
server = os.environ['DB_SERVER']
user = os.environ['DB_USER']
password = os.environ['DB_PASSWORD']
database = os.environ['DB_DATABASE']

# Connect to the database
conn = pymssql.connect(server, user, password, database)

@app.get('/')
def index(request: Request, response: Response):
    data = {
        'title': "Crud App"
    }
    return templates.TemplateResponse('index.html', data)

@app.get('/create')
def create(request: Request, response: Response):
    data = {
        'title': 'Create'
    }
    return templates.TemplateResponse('create.html', data)

@app.post('/create')
def create_post(request: Request, response: Response):
    name = request.form.get('name')
    email = request.form.get('email')
    with conn.cursor() as cursor:
        cursor.execute(f"INSERT INTO users (name, email) VALUES ('{name}', '{email}')")
        conn.commit()
    return RedirectResponse(url='/')

@app.get('/read')
def read(request: Request, response: Response):
    with conn.cursor() as cursor:
        cursor.execute('SELECT * FROM users')
        data = cursor.fetchall()
    data = {
        'title': 'Read',
        'data': data
    }
    return templates.TemplateResponse('read.html', data)

@app.get('/update/{id}')
def update(id, request: Request, response: Response):
    with conn.cursor() as cursor:
        cursor.execute(f"SELECT * FROM users WHERE id = {id}")
        data = cursor.fetchone()
    data = {
        'title': 'Update',
        'data': data
    }
    return templates.TemplateResponse('update.html', data)

@app.post('/update/{id}')
def update_post(id, request: Request, response: Response):
    name = request.form.get('name')
    email = request.form.get('email')
    with conn.cursor() as cursor:
        cursor.execute(f"UPDATE users SET name = '{name}', email = '{email}' WHERE id = {id}")
        conn.commit()
    return RedirectResponse(url='/read')

@app.get('/delete/{id}')
def delete(id, request: Request, response: Response):
    with conn.cursor() as cursor:
        cursor.execute(f"DELETE FROM users WHERE id = {id}")
        conn.commit()
    return RedirectResponse(url='/read')