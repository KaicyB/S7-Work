import flask_login
from flask_bcrypt import Bcrypt
from flask import Flask, render_template, redirect, jsonify, request
import pymysql

app = Flask(__name__)

app.secret_key = 'Losdeserveslife' 

conn = pymysql.connect(
  host='localhost', 
  user='root', 
  password='root', 
  database='the_base', 
  cursorclass=pymysql.cursors.DictCursor
)

login_manager = flask_login.LoginManager()
login_manager.init_app(app)

class User(flask_login.UserMixin):
    id = None

    def get_id(self):
        return str(self.id) if self.id else None


@app.route("/api/get_all_users")
def getAllUsers():
    instance = conn.cursor()                    
    instance.execute('SELECT * FROM users')     
    return jsonify(instance.fetchall()) 


@app.route("/api/insert_user", methods=['GET'])
def insertUserGET():
    data = request.args
    if not data:
        return jsonify({"status": "error", "message": "Invalid arguments"})
    
    lastName = data.get('last_name')
    firstName = data.get('first_name')
    email = data.get('email')

    instance = conn.cursor()
    instance.execute('INSERT INTO users (last_name, first_name, email) VALUES (%s, %s, %s)', 
                     (lastName, firstName, email))
    conn.commit()
    newID = instance.lastrowid
    return jsonify({"status": "created", "id": newID})

    

@app.route("/")
def start():
    return render_template("index.html")



@app.route("/home")
def homepage():

    return render_template("home.html")


@app.route("/about")
def about():

    return render_template("about.html")


@login_manager.user_loader
def user_loader(id):
    user = User()
    instance = conn.cursor()
    instance.execute('SELECT id FROM users WHERE id = %s', (id,))
    result = instance.fetchone()
    if result:
        user.id = result['id']
        return user
    return None  # User not found

if __name__ == "__main__":
    app.run(debug=True)
