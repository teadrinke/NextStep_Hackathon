from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


@app.route('/')
def index() :
    return {"title" : "Hackathon", "people" : 4}




if __name__ == "__main__":
    app.run(debug=True)