

from flask import Blueprint, request
from app.utils.langchainProcessor import process_query
from flask import jsonify
legal_document_bp = Blueprint("legal_document", __name__)

@legal_document_bp.route('/legal_document', methods=['POST'])
def get_legal_document():
    data = request.get_json()
    query = data.get('query')
    result = process_query(query)
    return jsonify(result)


