import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key'
    MONGODB_SETTINGS = {
        'db': os.environ.get('MONGODB_DB') or 'your-db-name',
        'host': os.environ.get('MONGODB_HOST') or 'localhost',
        'port': int(os.environ.get('MONGODB_PORT') or 27017),
        'username': os.environ.get('MONGODB_USERNAME') or None,
        'password': os.environ.get('MONGODB_PASSWORD') or None,
    }