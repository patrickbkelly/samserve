#write a python program to read metadata from a mssql database and create python classes for each table

import pyodbc

# Connect to your database
conn = pyodbc.connect('DRIVER={SQL Server};SERVER=localhost;DATABASE=MyDB;Trusted_Connection=yes;')

# Get a cursor
cursor = conn.cursor()

# Query the INFORMATION_SCHEMA.COLUMNS table
cursor.execute("SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS")

# Iterate through the results and generate Python classes
for row in cursor.fetchall():
    table_name = row[0]
    column_name = row[1]
    data_type = row[2]

    # Create a new class for every table
    if table_name != current_table_name:
        # Create a new class
        class_name = table_name.title()
        current_table_name = table_name
        exec("class " + class_name + "(object):\n    def __init__(self):\n        self.")

    # Add the column to the class
    exec("self." + column_name + " = None # " + data_type)

# Close the connection
conn.close()