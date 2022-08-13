from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def index() :
    if request.method == 'POST':
        print("request:", request.json['body']['name'])
        # name = request.json['body']['name']
        # email = request.json['body']['email']
        # return {"Name" : name, "Email" : email}

    return {"message" : "Please send name and email!"}




if __name__ == "__main__":
    app.run(debug=True)