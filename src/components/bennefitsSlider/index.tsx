import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'

// images
import EarthIcon from "../../assets/icons/eathicon.svg";
import HouseIcon from "../../assets/icons/houseicon.svg";
import TrocaIcon from "../../assets/icons/icontroca.svg";
import DiscountIcon from "../../assets/icons/discounticon.svg";
import TruckIcon from "../../assets/icons/truckicon.svg";

interface CarouselItem {
  id: number;
  content: string;
  subtitle: string;
  image : string;
}

const items: CarouselItem[] = [
    { id: 1, content: 'Produtos importados', subtitle: 'Produto de Alta Qualidade', image: EarthIcon },
    { id: 2, content: 'Estoque no Brasil', subtitle: 'Produtos mais perto de você!', image: HouseIcon },
    { id: 4, content: 'Ganhe 5% off', subtitle: 'Pagando à vista no Cartão', image: DiscountIcon },
    { id: 5, content: 'Frete Grátis', subtitle: 'Em compras acima de R$ 499,00', image: TruckIcon },
    { id: 2, content: 'Estoque no Brasil', subtitle: 'Produtos mais perto de você!', image: HouseIcon },
    { id: 3, content: 'Trocas Garantidas', subtitle: 'Trocas em até 48 horas, veja as regras', image: TrocaIcon },
    { id: 5, content: 'Frete Grátis', subtitle: 'Em compras acima de R$ 499,00', image: TruckIcon },
  ];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,  
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1700, // Ponto de quebra para telas maiores
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Ponto de quebra para telas médias
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BennefitsSlider: React.FC = () => {
  return (
    <div className='contentContainer'>
      <Slider {...settings}>
            {items.map((item) => (
              <div className='ItemBennefits' key={item.id}>
                  <img src={item.image} alt={item.content} />
                  <div className='infoBenefits'>
                      <p className='titleBenefits'>{item.content}</p>
                      <p className='subtitleBenefits'>{item.subtitle}</p>
                  </div>
              </div>
            ))}
        </Slider>
    </div>
   
  );
};

export default BennefitsSlider;
