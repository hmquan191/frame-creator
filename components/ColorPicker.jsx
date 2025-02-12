import React from "react";

const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="p-2 bg-aut bg-indigo-950 rounded-md">
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ease-in-out
              ${
                selectedColor === color.value
                  ? "border-white scale-110"
                  : "border-transparent hover:scale-105"
              }`}
            style={{ backgroundColor: color.value }}
            onClick={() => onColorChange(color.value)}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
