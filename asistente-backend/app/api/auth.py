from flask import request, jsonify
from werkzeug.exceptions import BadRequest
from flask_login import login_user

from app.models.user import User
from app.api import bp

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if not username or not password or not email:
        raise BadRequest('Username, password and email are required.')

    existing_user = User.objects(username=username).first()
    if existing_user:
        raise BadRequest('User already exists.')
    
    existing_email = User.objects(email=email).first()
    if existing_email:
        raise BadRequest('Email already exists.')

    user = User(username=username)
    user.set_password(password)
    user.email = email
    user.save()

    return jsonify({'message': 'User registered successfully.'}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        raise BadRequest('Username and password are required.')

    user = User.objects(username=username).first()

    if not user or not user.check_password(password):
        raise BadRequest('Invalid username or password.')

    login_user(user)

    return jsonify({'message': 'Logged in successfully.'}), 200
