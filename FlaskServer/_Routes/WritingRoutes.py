from flask import Blueprint, jsonify
from _Controllers.WritingController import WritingController

writing_routes = Blueprint('writing_routes', __name__)
controller = WritingController()

@writing_routes.route('/writing', methods=['GET'])
def get_writing():
    mode = int(request.args.get('mode'))
    level = int(request.args.get('level'))
    result = controller.get_writing(mode, level)
    return jsonify(result)
