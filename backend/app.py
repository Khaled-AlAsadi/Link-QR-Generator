from flask import Flask, request, jsonify
import qrcode
import io
import base64
from PIL import Image
import validators

app = Flask(__name__)


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


if __name__ == '__main__':
    app.run(debug=True)
