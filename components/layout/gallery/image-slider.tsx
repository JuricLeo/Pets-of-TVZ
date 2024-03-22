"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  autoplayInterval?: number;
}

export default function ImageSlider({
  images,
  autoplayInterval = 5000,
}: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (autoplay) {
      const autoplayTimer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoplayInterval);

      return () => clearInterval(autoplayTimer);
    }
  }, [autoplay, images.length, autoplayInterval]);

  const goToPreviousSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleAutoplay = () => {
    setAutoplay((prevState) => !prevState);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {images.map((image, index) => (
        <Image
          key={index}
          width={500}
          height={500}
          className="w-[500px] h-[350px]"
          src={image}
          alt={`Slide ${index}`}
          style={{ display: index === currentImageIndex ? "block" : "none" }}
        />
      ))}
      <div className="space-x-10 flex items-center mt-10">
        <ChevronLeft onClick={goToPreviousSlide} className="cursor-pointer" />
        {autoplay ? (
          <Pause onClick={toggleAutoplay} className="cursor-pointer" />
        ) : (
          <Play onClick={toggleAutoplay} className="cursor-pointer" />
        )}
        <ChevronRight onClick={goToNextSlide} className="cursor-pointer" />
      </div>
    </div>
  );
}
