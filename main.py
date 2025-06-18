from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    elif request.method == 'POST':
        user_name_email = request.form.get('userNameOrEmail', '')
        password = request.form.get('password', '')
        user_auth()


def user_auth():
    ...


def find_user():
    ...
