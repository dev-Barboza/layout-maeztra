import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './exemple';
import MobileCarouselImage from './mobile'; 
import { useMediaQuery } from 'react-responsive';

import "./styles.css";

function CarroselHome() {
  const isMobile = useMediaQuery({ maxWidth: 767 }); 
  return (
    <Carousel>
      <Carousel.Item interval={10000000}>
        {isMobile ? (
          <MobileCarouselImage text="First slide" />
        ) : (
          <ExampleCarouselImage text="First slide" />
        )}
        <Carousel.Caption className='itemSlide'>
          <h1 className='titlebanner'>Promoções de Outono</h1>
          <p className='DescriptionBanner'>Confira os melhores looks para combinar com <br/>você nesse Outono</p>
          <a className='ButtonSlider'>Conferir</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000000}>
        {isMobile ? (
          <MobileCarouselImage text="First slide" />
        ) : (
          <ExampleCarouselImage text="First slide" />
        )}
        <Carousel.Caption className='itemSlide'>
          <h1 className='titlebanner'>Promoções de Outono</h1>
          <p className='DescriptionBanner'>Confira os melhores looks para combinar com <br/>você nesse Outono</p>
          <a className='ButtonSlider'>Conferir</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000000}>
        {isMobile ? (
          <MobileCarouselImage text="First slide" />
        ) : (
          <ExampleCarouselImage text="First slide" />
        )}
        <Carousel.Caption className='itemSlide'>
          <h1 className='titlebanner'>Promoções de Outono</h1>
          <p className='DescriptionBanner'>Confira os melhores looks para combinar com <br/>você nesse Outono</p>
          <a className='ButtonSlider'>Conferir</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroselHome;
