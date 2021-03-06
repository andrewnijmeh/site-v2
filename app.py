import json
import os
import json as json
import datetime
from flask import Flask, render_template, request, redirect, Response, send_file, abort

app = Flask(__name__)

resume_link = "linkhere"

@app.route('/')
def index():
  age = int((datetime.date.today() - datetime.date(2007, 4, 22)).days / 365)
  return render_template('home.html', age=age)

if __name__ == "__main__":
  print("App run on port 8080")
  app.run(host="127.0.0.1", port=8080, debug=True)