from flask import Blueprint, jsonify
from _Controllers.DrawingController import DrawingController

drawing_routes = Blueprint('drawing_routes', __name__)
controller = DrawingController()

@drawing_routes.route('/drawing', methods=['GET'])
def get_drawing():
    mode = int(request.args.get('mode'))
    level = int(request.args.get('level'))
    result = controller.get_drawing(mode, level)
    return jsonify(result)
