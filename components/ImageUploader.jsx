import React from "react";

const ImageUploader = ({ setUploadedImages }) => {
  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedImages((prevImages) =>
        [...newImages, ...prevImages].slice(0, 10)
      );
    }
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="block w-full text-sm text-gray-400
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-600 file:text-white
          hover:file:bg-violet-700 cursor-pointer"
      />
      <p className="mt-2 text-sm text-gray-400">Max Capacity: 10 pictures</p>
    </div>
  );
};

export default ImageUploader;
