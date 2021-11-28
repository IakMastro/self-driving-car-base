import json
import os
from hashlib import sha256
import pymongo

def write_mongo(data):
    client = pymongo.MongoClient("mongodb://dbuser:dbpass@mongo:27017/")
    db = client['datacollector']
    col = db['dummy_data']
    col.insert_one(data)

def main():
    dummy_catalog = '/bin/'
    data = dict()
    DIR = os.listdir(dummy_catalog)
    index = 0

    for i in DIR:
        if(os.path.isfile(dummy_catalog+i)):
            data[str(index)] = (sha256(bytes(i,'utf-8')).hexdigest())
            index += 1

    write_mongo(data)

if(__name__=='__main__'):
    main()
