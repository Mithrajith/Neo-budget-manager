from flask import Flask, render_template, request, redirect, url_for, session, flash
import sqlite3
from werkzeug.security import check_password_hash
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Function to connect to SQLite
def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def home():
    return render_template('login.html')  # Your HTML file goes here

@app.route('/login', methods=['GET','POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
    conn.close()

    if user and check_password_hash(user['password'], password):
        session['email'] = user['email']
        return redirect('dashboard')  # instead of render_template
  # You can redirect to a dashboard here
    else:
        flash('❌ Invalid email or password')
        return redirect(url_for('home'))

@app.route('/dashboard')
def dashboard():
    return render_template('cdb.html')  # Your dashboard HTML file goes here


@app.route('/Analytics.html')
def analytics():
    return render_template('Analytics.html')

@app.route('/calendar.html')
def calendar():
    return render_template('calendar.html')

@app.route('/settings.html')
def settings():
    return render_template('settings.html')

@app.route('/login.html')
def logout():
    session.pop('email', None)
    flash('✅ You have been logged out.')
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
