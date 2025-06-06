import sqlite3
from werkzeug.security import generate_password_hash

# Connect to SQLite DB
conn = sqlite3.connect('users.db')
cursor = conn.cursor()

# Create users table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
''')

# Insert a test user (email: admin@example.com, password: admin123)
hashed_pw = generate_password_hash("admin123")
cursor.execute("INSERT OR IGNORE INTO users (email, password) VALUES (?, ?)", 
               ("admin@example.com", hashed_pw))

conn.commit()
conn.close()
print("✅ User table created and test user inserted.")
