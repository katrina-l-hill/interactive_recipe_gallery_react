import React, { useState } from 'react';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="gallery">
      <h1>Recipe Gallery</h1>
      <div className="image-container">
        {/* Display the image based on the currentIndex */}
        <img src={images[currentIndex].url} alt={`Recipe ${images[currentIndex].id}`} />
        <p>{images[currentIndex].description}</p>
      </div>
      <div className="navigation">
        {/* "Previous" and "Next" buttons */}
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;