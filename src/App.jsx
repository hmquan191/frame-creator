import React, { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import ImageSelector from "../components/ImageSelector";
import FrameCreator from "../components/FrameCreator";
import MouseTracker from "../components/MouseTracker";

const App = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <MouseTracker>
      <div className="max-w-4xl mx-auto p-6 min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold text-center mb-8">
          Photo Frame Creator
        </h1>
        <ImageUploader setUploadedImages={setUploadedImages} />
        <ImageSelector
          uploadedImages={uploadedImages}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
        <FrameCreator selectedImages={selectedImages} />
      </div>
    </MouseTracker>
  );
};

export default App;
