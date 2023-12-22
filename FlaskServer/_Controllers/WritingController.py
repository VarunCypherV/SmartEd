from _Models.WritingModel1 import WritingModel1
from _Models.WritingModel2 import WritingModel2
from _Models.WritingModel3 import WritingModel3

class WritingController:
    def get_writing(self, mode, level):
        if mode == 1:
            model = WritingModel1()
        elif mode == 2:
            model = WritingModel2()
        elif mode == 3:
            model = WritingModel3()
        else:
            return {'error': 'Invalid mode'}

        if level == 1:
            return model.func1()
        elif level == 2:
            return model.func2()
        # Add more conditions for different levels as needed...
        else:
            return {'error': 'Invalid level'}
