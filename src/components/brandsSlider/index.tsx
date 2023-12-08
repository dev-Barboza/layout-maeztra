import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 import './styles.css'

// images


interface CarouselItem {
  id: number;
  content: string;
  image : string;
}

const items: CarouselItem[] = [
    { id: 1, content: 'Comma', image: "https://i.imgur.com/Qoc0YF7.png" },
    { id: 2, content: 'Melissa', image: "https://i.imgur.com/cHLLxR4.png" },
    { id: 3, content: 'Forever 21', image: "https://i.imgur.com/JOTNQgl.png" },
    { id: 4, content: 'Zara', image: "https://i.imgur.com/PN0nOAY.png" },
    { id: 5, content: 'Ann Taylor', image: "https://i.imgur.com/qZ1WvYA.png" },
    { id: 1, content: 'Comma', image: "https://i.imgur.com/Qoc0YF7.png" },
    { id: 3, content: 'Forever 21', image: "https://i.imgur.com/JOTNQgl.png" },
    { id: 5, content: 'Ann Taylor', image: "https://i.imgur.com/qZ1WvYA.png" },



  ];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,  // Quantidade de itens a serem exibidos por vez
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // Define o ponto de quebra para telas menores
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BrandSlider: React.FC = () => {
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div className='ItemBrand' key={item.id}>
            <img src={item.image} alt={item.content} />
        </div>
      ))}
    </Slider>
  );
};

export default BrandSlider;
