# app/__init__.py

from flask import Flask
from flask_cors import CORS

from .config import Config
from .extensions import db, login_manager
from app.api import legal_document_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    CORS(app)
    login_manager.init_app(app)

    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(legal_document_bp, url_prefix="/api")

    return app


from app.models.user import User

@login_manager.user_loader
def load_user(user_id):
    return User.objects(id=user_id).first()