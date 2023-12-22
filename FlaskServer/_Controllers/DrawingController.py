from _Models.DrawingModel1 import DrawingModel1
from _Models.DrawingModel2 import DrawingModel2
from _Models.DrawingModel3 import DrawingModel3

class DrawingController:
    def get_drawing(self, mode, level):
        if mode == 1:
            model = DrawingModel1()
        elif mode == 2:
            model = DrawingModel2()
        elif mode == 3:
            model = DrawingModel3()
        else:
            return {'error': 'Invalid mode'}

        if level == 1:
            return model.func1()
        elif level == 2:
            return model.func2()
        # Add more conditions for different levels as needed...
        else:
            return {'error': 'Invalid level'}
