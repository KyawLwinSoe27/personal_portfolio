import React from 'react';
import "../../assets/styles/components/common/blobs.css";

const Blob1 = () => {
  return (
    <div className="absolute bottom-20 left-0 z-0 w-60 h-60">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0D47A133" d="M37.4,-53C51.3,-41.4,67.3,-34.2,72.6,-22.5C77.9,-10.8,72.4,5.5,66.5,21C60.7,36.6,54.4,51.5,43.3,53C32.1,54.5,16.1,42.8,2.2,39.7C-11.6,36.7,-23.2,42.3,-28.9,39C-34.6,35.7,-34.3,23.3,-39.2,11.8C-44.2,0.3,-54.4,-10.3,-51.8,-16.3C-49.1,-22.3,-33.5,-23.5,-22.8,-36.1C-12,-48.8,-6,-72.9,2.9,-76.9C11.8,-80.8,23.5,-64.7,37.4,-53Z" transform="translate(100 100)" />
    </svg>
    </div>
  );
};

export default Blob1;