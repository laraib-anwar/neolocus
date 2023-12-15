import React from "react";

const CircularImage = ({ position }) => {

 const [xCenter, yCenter] = position;
  const imageStyle = {
    position: "absolute",
    left: `${xCenter * 50}%`,
    top: `${yCenter * 80}%`,
    width: '45px',
    height: '45px',
    transform: "translate(-50%, -50%)", // Center the image based on its position
    borderRadius: "50%",
  // Adjust the height of the circular image as needed
    background: "url(hotspotSmall.png)",
    backgroundSize: "cover",
  };

  return <div style={imageStyle}></div>;
};

export default CircularImage;




