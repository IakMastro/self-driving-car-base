from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from flask_redis import FlaskRedis

# Configuration
DEBUG = True

# Init app
app = Flask(__name__)
app.config.from_object(__name__)

# Mongodb connection init
app.config['MONGO_URI'] = "mongodb://dbuser:dbpass@mongodb:27017/cars?authSource=admin"
mongo_client = PyMongo(app)

# Redis connection init
app.config['REDIS_URL'] = "redis://dbuser:dbpass@redis:6379/0"
redis_client = FlaskRedis(app)

# Init CORS
CORS(app, resources={r'/*': {'origins': '*'}})

# Sanity check
@app.route('/ping', methods=['GET'])
@cross_origin()
def ping():
    return jsonify('pong!')

if __name__ == "__main__":
    app.run()
