from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/home")
def homepage():

    return render_template("home.html")


@app.route("/about")
def about():

    return render_template("about.html")


@app.route("/submit", methods=["POST"])
def submit():
    
    username = request.form["fname"]
    
    message = request.form["lname"]
    
    return f"Thanks {username}, your message was: {message}"


if __name__ == "__main__":
    app.run(debug=True)
