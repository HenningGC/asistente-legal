from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from app.extensions import db

class User(UserMixin, db.Document):
    username = db.StringField(max_length=64, required=True, unique=True)
    password_hash = db.StringField(max_length=128, required=True)
    email = db.StringField(max_length=64, required=True, unique=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)