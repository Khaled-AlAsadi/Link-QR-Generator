from flask import Flask, request, jsonify
import qrcode
import io
import base64
from PIL import Image
import validators
from pythonping import ping
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/generate', methods=['POST'])
def generate_qr():
    data = request.json
    link = data.get('link', '')

    if not link or not validators.url(link):
        return jsonify({'error': 'No link provided or wrong format'}), 400

    # Generate QR code
    img = qrcode.make(link)

    # Convert the image to a bytes buffer
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)

    # Encode the image to base64 to send in the response
    img_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # Return the base64 encoded QR image
    return jsonify({'code': img_base64})


@app.route('/', methods=['GET'])
def home():
    return "App is running!", 200


if __name__ == '__main__':
    app.run(debug=True)
