"use client";

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import ColorPicker from "./ColorPicker";

const frameColors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Red", value: "#FF0000" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Neon Green", value: "#39FF14" },
  { name: "Electric Purple", value: "#BF00FF" },
  { name: "Coral", value: "#FF7F50" },
  { name: "Turquoise", value: "#40E0D0" },
];

const FrameCreator = ({ selectedImages }) => {
  const [frameColor, setFrameColor] = useState(frameColors[0].value);
  const frameRef = useRef(null);

  const handleDownload = () => {
    const frame = frameRef.current;
    if (frame) {
      html2canvas(frame, { scale: 2 }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "photo-frame.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const textColor = getContrastYIQ(frameColor);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Choose Frame Color</h2>
      <ColorPicker
        colors={frameColors}
        selectedColor={frameColor}
        onColorChange={setFrameColor}
      />
      <div className=" mt-4 flex justify-center">
        <button
          onClick={handleDownload}
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Download Image
        </button>
      </div>
      <div className="mt-6 max-w-md mx-auto">
        <div
          ref={frameRef}
          id="photo-frame"
          className="p-4 rounded-lg transition-shadow duration-300 ease-in-out"
          style={{ backgroundColor: frameColor, color: textColor }}
        >
          {selectedImages.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Selected ${index + 1}`}
              className="w-full aspect-square object-cover rounded-md mb-4 last:mb-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function getContrastYIQ(hexcolor) {
  const r = parseInt(hexcolor.substr(1, 2), 16);
  const g = parseInt(hexcolor.substr(3, 2), 16);
  const b = parseInt(hexcolor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

export default FrameCreator;
