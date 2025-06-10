
# Manufacturing Defect Detection

![Manufacturing Defect Detection - Website](https://github.com/sindhu213/Manufacturing-Defect-Detection/blob/main/assets/hero.png)


This project aims to assist manufacturers in identifying and understanding visual defects in industrial products using deep learning. It not only classifies whether a product image contains a defect but also provides a natural language description of the defect, helping streamline quality control and traceability.We make use of the MVTec Anomaly Detection (AD) dataset along with relevant images from Google Image Search to train a robust model that generalizes well across defect types. 


## Features

- **Defect Detection & Classification**: Identifies whether a product image has a defect using a TensorFlow-based model.

- **Automated Defect Description** Uses Google’s Gemini API to describe the type and location of the defect in natural language.

- **Data Augmentation**: Enhances training by simulating diverse visual conditions such as rotations, flips, and lighting variations.

- **Frontend + Backend Integration**: Seamless communication between React-based frontend and Flask backend using CORS.

- **Interactive UI**: Upload product images and receive immediate AI-powered insights.


## Run Locally

This project is divided into two parts: `backend` and `frontend`. 
### 1. Backend Setup

```bash
cd Backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file inside the backend folder:

```bash
  GEMINI_API_KEY=your_gemini_api_key_here
```

Then, start the Flask server:

```bash
  python app.py
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:5173 (or the port indicated in the terminal).

**Note**- Make sure the Flask server is also running to allow API communication.


## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.



