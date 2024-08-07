from flask import Flask, render_template

app = Flask(__name__)
app.debug=True

@app.route('/')
def home():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(ssl_context=('cert.pem', 'key.pem'))
