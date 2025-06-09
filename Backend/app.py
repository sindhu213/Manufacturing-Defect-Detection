from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from PIL import Image, ImageOps
import numpy as np
import os
import google.genai as genai
from dotenv import load_dotenv

load_dotenv(".env")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai_client = genai.Client(api_key=GEMINI_API_KEY)

model = load_model("./Keras model/keras_model.h5", compile=False)
class_names = open("./Keras model/labels.txt", "r").readlines()

app = Flask(__name__)
CORS(app, resources={
    r"/result": {
        "origins": ["http://localhost:5173", "http://192.168.29.178:5173"],
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"],
        "supports_credentials": True
    }
})

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

@app.route('/caption', methods=['OPTIONS'])
def handle_options():
    response = jsonify({'message': 'Preflight Accepted'})
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:5173")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")
    response.headers.add("Access-Control-Allow-Methods", "POST")
    return response

@app.route('/analyze', methods=['POST'])
def analyze_image():
    file = request.files.get('image')
    if not file:
        return jsonify({'error': 'No image uploaded'}), 400

    image = Image.open(file).convert("RGB")
    resized_image = ImageOps.fit(image, (224, 224), Image.Resampling.LANCZOS)
    image_array = np.asarray(resized_image)
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    data[0] = normalized_image_array

    prediction = model.predict(data)
    index = np.argmax(prediction)
    class_name = class_names[index].strip()
    confidence_score = float(prediction[0][index])

    try:
        response = genai_client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[image, "Describe defect in this product, if there is any."]
        )
        defect_description = response.text.strip()
    except Exception as e:
        defect_description = f"Gemini error: {str(e)}"

    return jsonify({
        'class': class_name,
        'confidence': confidence_score,
        'defect_description': defect_description
    })

if __name__ == '__main__':
    app.run(debug=True)