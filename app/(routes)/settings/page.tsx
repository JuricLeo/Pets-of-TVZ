"use client";

import { useState } from "react";

const SettingsPage = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [color, setColor] = useState<string>("#000000");
  const [fontSize, setFontSize] = useState<string>("16");
  const [rotate, setRotate] = useState<string>("0");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(e.target.value);
  };

  const handleRotateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRotate(e.target.value);
  };

  return (
    <div className="mb-40">
      <h1 className="text-center text-4xl mb-10">Gallery</h1>
      <h2 className="text-center text-xl text-slate-500 mb-20">
        Change the settings of this page!
      </h2>
      <div className="mb-20 space-y-4">
        <div className="flex items-center space-x-4 justify-center">
          <label>Change the color of the element below here: </label>
          <input
            type="color"
            value={backgroundColor}
            onChange={handleColorChange}
            className="bg-black w-20 h-10 rounded-md appearance-none"
          />
        </div>
        <div className="flex items-center space-x-4 justify-center">
          <label>
            Change the color of the text for the element below here:{" "}
          </label>
          <input
            type="color"
            value={color}
            onChange={handleTextColorChange}
            className="bg-black w-20 h-10 rounded-md appearance-none"
          />
        </div>
        <div className="flex items-center space-x-4 justify-center">
          <label>
            Change the size of the text for the element below here:{" "}
          </label>
          <input
            className="text-black rounded-md w-16 text-center p-2"
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </div>
        <div className="flex items-center space-x-4 justify-center">
          <label>Change the rotation of the element below here: </label>
          <input
            className="text-black rounded-md w-16 text-center p-2"
            type="number"
            value={rotate}
            onChange={handleRotateChange}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor,
          fontSize: `${fontSize}px`,
          color,
          transform: `rotate(${rotate}deg)`,
        }}
        className="w-[50%] h-full m-auto rounded-md p-8 text-center"
      >
        In cozy corners, furry friends, Their love and warmth, they freely send.
        With tails that wag and purrs so sweet, Home pets make our lives
        complete.
      </div>
    </div>
  );
};

export default SettingsPage;
