from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/change_image", methods=["POST"])
def change_image():
    selected_image = request.form["image"]
    return selected_image


if __name__ == "__main__":
    app.run()
