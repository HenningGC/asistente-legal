from flask import request, jsonify
from werkzeug.exceptions import BadRequest
from flask_login import login_user

from app import db
from app.models.user import User
from app.api import bp

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        raise BadRequest('Username and password are required.')

    existing_user = User.objects(username=username).first()
    if existing_user:
        raise BadRequest('User already exists.')

    user = User(username=username)
    user.set_password(password)
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
