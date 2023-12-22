from _Models.SpeakingModel1 import SpeakingModel1
from _Models.SpeakingModel2 import SpeakingModel2
from _Models.SpeakingModel3 import SpeakingModel3

class SpeakingController:
    def get_speaking(self, mode, level):
        if mode == 1:
            model = SpeakingModel1()
        elif mode == 2:
            model = SpeakingModel2()
        elif mode == 3:
            model = SpeakingModel3()
        else:
            return {'error': 'Invalid mode'}

        if level == 1:
            return model.func1()
        elif level == 2:
            return model.func2()
        # Add more conditions for different levels as needed...
        else:
            return {'error': 'Invalid level'}
