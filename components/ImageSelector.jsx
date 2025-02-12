import React from "react";

const ImageSelector = ({
  uploadedImages,
  selectedImages,
  setSelectedImages,
}) => {
  const handleImageSelect = (image) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((img) => img !== image));
    } else if (selectedImages.length < 4) {
      setSelectedImages([...selectedImages, image]);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Choose 4 Pictures</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {uploadedImages.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ease-in-out
              ${
                selectedImages.includes(image)
                  ? "ring-2 ring-white ring-opacity-75 scale-105"
                  : "hover:opacity-80"
              }`}
            onClick={() => handleImageSelect(image)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;
