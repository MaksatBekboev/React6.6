import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("./images.json")
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.log(error));
  }, []);

  const previousSlide = () => {
    let slide = currentSlide - 1;
    if (slide < 0) {
      slide = images.length - 1;
    }
    setCurrentSlide(slide);
  };

  const nextSlide = () => {
    let slide = currentSlide + 1;
    if (slide >= images.length) {
      slide = 0;
    }
    setCurrentSlide(slide);
  };

  return (
    <div className="slider-container">
      <img className="slider-image" src={images[currentSlide]?.url} alt={`Slide ${currentSlide + 1}`} />
      <div className="slider-controls">
        <button className="slider-button" onClick={previousSlide}>Назад</button>
        <button className="slider-button" onClick={nextSlide}>Далее</button>
      </div>
    </div>
  );
};

export default Slider;