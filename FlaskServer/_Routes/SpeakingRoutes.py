from flask import Blueprint, jsonify
from _Controllers.SpeakingController import SpeakingController

speaking_routes = Blueprint('speaking_routes', __name__)
controller = SpeakingController()

@speaking_routes.route('/speaking', methods=['GET'])
def get_speaking():
    mode = int(request.args.get('mode'))
    level = int(request.args.get('level'))
    result = controller.get_speaking(mode, level)
    return jsonify(result)
