import time
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'nu privet, dorogoi'


@app.route('/time')
def current_time():
    return f'{time.time()}'
