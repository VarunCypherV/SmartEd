from flask import Flask, render_template
from _Routes.DrawingRoutes import drawing_routes
from _Routes.WritingRoutes import writing_routes
from _Routes.SpeakingRoutes import speaking_routes

app = Flask(__name__, template_folder='./_Views')


app.register_blueprint(drawing_routes)
app.register_blueprint(writing_routes)
app.register_blueprint(speaking_routes)


@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
