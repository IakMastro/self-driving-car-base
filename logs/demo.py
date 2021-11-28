import json
import os
from hashlib import sha256

def gen_json_file(data):
    FILENAME='/tmp/gened_data.json'
    with open(FILENAME,'w') as fp:
        json.dump(data,fp)

def main():
    dummy_catalog='/bin/'
    data={}
    DIR=os.listdir(dummy_catalog)
    index=0
    for i in DIR:
        if(os.path.isfile(dummy_catalog+i)):
            data[index]=(sha256( bytes(i,'utf-8') ).hexdigest() )
            #print(json.dumps(data))
            index+=1
    gen_json_file(data)
    print("Saved file")

if(__name__=='__main__'):
    main()
