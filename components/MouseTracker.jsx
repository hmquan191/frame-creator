"use client";
import React, { useEffect, useState } from "react";

const MouseTracker = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const UpdateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", UpdateMousePosition);

    return () => {
      window.removeEventListener("mousemove", UpdateMousePosition);
    };
  }, []);

  return (
    <div className="relative h-max w-max bg-black text-white min-h-screen min-w-full">
      <div
        className="fixed w-5 h-5 rounded-full bg-white bg-opacity-30 blur pointer-events-none transition-all duration-0 ease-in-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />
      {children}
    </div>
  );
};

export default MouseTracker;
