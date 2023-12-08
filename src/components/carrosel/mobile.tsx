import React from 'react';
import BannerMobile from "../../assets/banners/bannercarroselmobile.png"


interface ExampleCarouselImageProps {
  text: string;
}



const MobileCarouselImage: React.FC<ExampleCarouselImageProps> = ({ text }) => {
  return (
    <img
      className="d-block w-100"
      src={BannerMobile}
      alt={text}
    />
  );
};

export default MobileCarouselImage;
