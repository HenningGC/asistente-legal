from flask import Blueprint

bp = Blueprint('api', __name__)

from app.api import auth
from .legal_document import legal_document_bp