from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    elif request.method == 'POST':
        user_name_email = request.form.get('userNameOrEmail', '')
        password = request.form.get('password', '')
        user_auth(user_name_email, password)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    elif request.method == 'POST':
        user_name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        register_user()


def user_auth(user_name_email: str, user_password: str):
    ...


def register_user(user_name: str, email: str, user_password: str):
    ...
