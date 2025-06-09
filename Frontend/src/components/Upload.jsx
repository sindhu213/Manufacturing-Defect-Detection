import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiImage, FiCheckCircle, FiAlertCircle, FiCamera, FiVideoOff } from 'react-icons/fi';
import Webcam from 'react-webcam';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [defect_description, setdefect_description] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [showDetectButton, setShowDetectButton] = useState(false);
  const webcamRef = useRef(null);

  // Initialize webcam
  const startWebcam = useCallback(() => {
    setIsWebcamActive(true);
    setError(null);
  }, []);

  // Stop webcam
  const stopWebcam = useCallback(() => {
    setIsWebcamActive(false);
  }, []);

  // Capture from webcam and automatically close it
  const captureFromWebcam = useCallback(() => {
    if (!isWebcamActive || !webcamRef.current) {
      setError('Camera not ready.');
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      setError('Failed to capture image from webcam.');
      return;
    }

    // Convert base64 to Blob
    fetch(imageSrc)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'webcam-capture.jpg', { type: 'image/jpeg' });
        setImage(URL.createObjectURL(file));
        setImageFile(file);
        setShowDetectButton(true);
        stopWebcam(); // Close the webcam after capture
      })
      .catch(err => {
        console.error('Error converting image:', err);
        setError('Failed to process captured image.');
      });
  }, [isWebcamActive, stopWebcam]);

  const detectDefects = async () => {
    if (!imageFile) {
      setError('No image available for detection');
      return;
    }

    setIsProcessing(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const result = await response.json();
      console.log('Defect detection result:', result);
     
      // Handle the API response
      if (result) {
        setdefect_description(result.defect_description || 'Defect detected');
        setConfidence(result.confidence || 0);
      } else {
        setError(result.message || 'Defect detection failed');
      }
    } catch (err) {
      console.error('Error detecting defects:', err);
      setError('Failed to detect defects. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleImageUpload = useCallback((file) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPEG, PNG, etc.)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Image size should be less than 5MB');
      return;
    }

    setError(null);
    setImage(URL.createObjectURL(file));
    setImageFile(file);
    setShowDetectButton(true);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      handleImageUpload(e.target.files[0]);
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full py-20 px-4 md:px-8"
      style={{
        background: 'radial-gradient(circle at center, #1c1c1f 0%, #000000 100%)',
      }}
    >
      <div className="w-full mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 w-full"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">Quality Inspection Portal</h1>
          <p className="text-lg text-gray-400">Upload product images for defect detection</p>
        </motion.div>

        {/* Webcam Preview (hidden unless active) */}
        {isWebcamActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full max-w-3xl mx-auto mb-4 rounded-xl overflow-hidden border-2 border-blue-500/50"
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-center gap-3">
              <button
                onClick={captureFromWebcam}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
              >
                <FiCamera /> Capture Image
              </button>
              <button
                onClick={stopWebcam}
                className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
              >
                <FiVideoOff /> Close Camera
              </button>
            </div>
          </motion.div>
        )}

        {/* Upload Area */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="border-2 border-dashed border-blue-500/50 rounded-xl p-6 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center cursor-pointer bg-gradient-to-br from-gray-800/10 to-black/20 transition-all mb-8"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          style={{
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.15)'
          }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FiUpload className="text-blue-400 text-4xl mb-3" />
          </motion.div>
          <p className="text-md mb-3 text-gray-300">Drag & drop product image here</p>
          <p className="text-sm mb-4 text-gray-400/60">Supports JPG, PNG up to 5MB</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:from-blue-600 hover:to-blue-500 transition-all flex items-center gap-2 text-sm"
                style={{
                  boxShadow: '0 2px 10px rgba(59, 130, 246, 0.3)'
                }}
              >
                <FiImage /> Select Image
              </label>
            </div>

            <button
              onClick={isWebcamActive ? stopWebcam : startWebcam}
              className={`${isWebcamActive ? 'bg-red-900 hover:bg-red-800' : 'bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-700 hover:to-purple-600'} text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm transition-all`}
              style={{
                boxShadow: `0 2px 10px ${isWebcamActive ? 'rgba(220, 38, 38, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`
              }}
            >
              {isWebcamActive ? <FiVideoOff /> : <FiCamera />}
              {isWebcamActive ? 'Close Camera' : 'Use Webcam'}
            </button>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/50 border border-red-700 p-3 rounded-lg flex items-center gap-3 mb-8 w-full max-w-3xl mx-auto"
          >
            <FiAlertCircle className="text-red-400 text-xl" />
            <p className="text-red-100 text-sm">{error}</p>
          </motion.div>
        )}

        {image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto bg-black/20 p-5 rounded-xl border border-blue-900/30 backdrop-blur-sm"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Image Preview */}
            <motion.div
              className="flex-1 w-full lg:w-auto relative"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image}
                alt="Captured product"
                className="w-full h-auto rounded-lg shadow-lg border-2 border-blue-900/50"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 text-blue-300 px-2 py-1 rounded text-xs">
                Product Image
              </div>
              
              {showDetectButton && !isProcessing && (
                <div className="absolute top-3 right-3">
                  <button
                    onClick={detectDefects}
                    className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                  >
                    Detect Defects
                  </button>
                </div>
              )}
            </motion.div>

            {/* Analysis Results */}
            <div className="flex-1 w-full lg:w-auto bg-gradient-to-br from-gray-900/20 to-black/30 p-5 rounded-lg border border-gray-800/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
                <FiCheckCircle className="text-blue-400" /> Inspection Results
              </h3>

              {isProcessing ? (
                <motion.div
                  className="flex flex-col items-center justify-center gap-3 py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-10 h-10 border-[3px] border-gray-900/20 border-t-blue-500 rounded-full animate-spin"></div>
                  <p className="text-blue-300 animate-pulse text-sm">Analyzing product quality...</p>
                </motion.div>
              ) : (
                <>
                  {defect_description ? (
                    <>
                      <div className="mb-6">
                        <h4 className="text-md font-medium mb-2 text-blue-300">Defect Analysis:</h4>
                        <div className="bg-gray-800/40 p-3 rounded-lg border-l-3 border-blue-600">
                          <p className="text-gray-100 text-sm">{defect_description}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-md font-medium mb-2 text-blue-300">Quality Confidence:</h4>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-full bg-blue-900/20 rounded-full h-2.5">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-300"
                              initial={{ width: 0 }}
                              animate={{ width: `${confidence*100}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <span className="text-blue-300 font-bold whitespace-nowrap text-sm">{confidence*100}%</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          {confidence >= 90
                            ? "Excellent quality - Ready for shipment"
                            : confidence >= 75
                              ? "Good quality - Minor issues detected"
                              : "Needs review - Significant defects found"}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <p>Click "Detect Defects" to analyze the image</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Upload;