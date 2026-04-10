from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL Config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your_password'
app.config['MYSQL_DB'] = 'divine_yoga'

mysql = MySQL(app)

@app.route('/')
def home():
    return render_template('index.html')

# Contact form API
@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO users (name, email, message) VALUES (%s, %s, %s)",
        (data['name'], data['email'], data['message'])
    )
    mysql.connection.commit()
    cur.close()
    return jsonify({"status": "success"})

# Pricing / Enroll API
@app.route('/enroll', methods=['POST'])
def enroll():
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO users (name, email, phone, course) VALUES (%s, %s, %s, %s)",
        (data['name'], data['email'], data['phone'], data['course'])
    )
    mysql.connection.commit()
    cur.close()
    return jsonify({"status": "enrolled"})

if __name__ == "__main__":
    app.run(debug=True)
