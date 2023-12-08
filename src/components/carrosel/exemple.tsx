import React from 'react';


interface ExampleCarouselImageProps {
  text: string;
}



const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ text }) => {
  return (
    <img
      className="d-block w-100"
      src="https://i.imgur.com/ftECh3G.png" 
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
