from array import array
from flask import Flask, request
import numpy as np
from flask_cors import CORS, cross_origin
import tensorflow as tf
import json
# from flask_sqlalchemy import SQLAlchemy

import pickle

app = Flask(__name__)
CORS(app, support_credentials=True)

# Load the model:
# model = pickle.load(open('model.h5', 'rb'))

tf.keras.backend.set_learning_phase(0)  # Ignore dropout at inference
model = tf.keras.models.load_model('model.h5')


@app.route('/', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def index() :
    prediction = []
    if request.method == 'POST':
        
        print("request post:", request.json['jsonData']) 
        # print(type(data))
        data = request.json['jsonData']
        data = json.loads(data)
        
        lst = data
        print("After json.loads => lst =>", lst, type(lst))
        print("the value of l:", lst)
        # print("Shape:", lst.shape)
        
        arr = np.array([lst])
        print("Shape:", arr.shape)
        
        prediction = model.predict(arr)

        #sending the predicted result to frontend
        predictionList = prediction.tolist()
        print('predictionList', predictionList)
        print(type(predictionList))
        return predictionList

    return "NextStep Hackathon!"



if __name__ == "__main__":
    app.run(debug=True)