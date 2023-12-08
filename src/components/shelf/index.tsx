import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "../shelf/index.css"

// images
import imageproduct01 from "../../assets/product/Produto01.png";
import imageproduct02 from "../../assets/product/Produto02.png"

type products = {
    id: number;
    productName: string;
    productDescription: string;
    productImage: string; // Assuming EarthIcon is a string for simplicity
    productPrice: string;
    productColor: string[]; // Change to an array of strings for multiple colors
  };
  
  const items: products[] = [
    { id: 1, productName: 'Faux Suede Mini Skirt', productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.', productImage: imageproduct01, productPrice: '500,00', productColor: ['amarelo', 'rosa', 'azul', 'roxo'] },
    { id: 2, productName: 'Ruched Rose Print Mini Skirt', productDescription: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.', productImage: imageproduct02, productPrice: '320,00', productColor: ['preto', 'vermelho', 'areia', 'gelo'] },
    { id: 3, productName: 'Faux Suede Mini Skirt', productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.', productImage: imageproduct01, productPrice: '500,00', productColor: ['amarelo', 'rosa', 'azul', 'roxo'] },
    { id: 4, productName: 'Ruched Rose Print Mini Skirt', productDescription: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.', productImage: imageproduct02, productPrice: '320,00', productColor:  ['preto', 'vermelho', 'areia', 'gelo'] },
    { id: 5, productName: 'Faux Suede Mini Skirt', productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.', productImage: imageproduct01, productPrice: '500,00', productColor: ['amarelo', 'rosa', 'azul', 'roxo'] },
    { id: 6, productName: 'Faux Suede Mini Skirt', productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.', productImage: imageproduct01, productPrice: '500,00', productColor: ['amarelo', 'rosa', 'azul', 'roxo'] },
    { id: 7, productName: 'Ruched Rose Print Mini Skirt', productDescription: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.', productImage: imageproduct02, productPrice: '320,00', productColor: ['preto', 'vermelho', 'areia', 'gelo'] },
    { id: 8, productName: 'Faux Suede Mini Skirt', productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.', productImage: imageproduct01, productPrice: '500,00', productColor: ['amarelo', 'rosa', 'azul', 'roxo'] },
    { id: 9, productName: 'Ruched Rose Print Mini Skirt', productDescription: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.', productImage: imageproduct02, productPrice: '320,00', productColor:  ['preto', 'vermelho', 'areia', 'gelo'] },
    { id: 10, productName: 'Faux Suede Mini Skirt', productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.', productImage: imageproduct01, productPrice: '500,00', productColor: ['amarelo', 'rosa', 'azul', 'roxo'] },
  ];

  const colorMap: Record<string, string> = {
    amarelo: '#DEAC71',
    rosa: '#D37164',
    azul: '#6497D3',
    roxo: '#3C3B79',
    preto: '#1C1A19',
    vermelho: '#D84E4B',
    areia: '#CFC9B0',
    gelo: '#EAE9E5',
  };

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,  // Quantidade de itens a serem exibidos por vez
  arrows: true,
  responsive: [
    {
      breakpoint: 1461, // Define o ponto de quebra para telas menores (por exemplo, dispositivos móveis)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      },
    },
    {
      breakpoint: 768, // Define o ponto de quebra para telas menores (por exemplo, dispositivos móveis)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      },
    },
  ],
};

const Shelf: React.FC = () => {
  // Agora, vamos usar um objeto para rastrear as cores selecionadas para cada item
  const [selectedColors, setSelectedColors] = useState<Record<number, string | null>>({});

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div className='productItem' key={item.id}>
          <img src={item.productImage} alt={item.productName} />

          <div className='selectionColor'>
            {item.productColor.map((color, index) => (
              <button
                key={index}
                className={`input-color ${selectedColors[item.id] === color ? 'selected' : ''}`}
                onClick={() => setSelectedColors((prev) => ({ ...prev, [item.id]: color }))}
                style={{ backgroundColor: colorMap[color] }}
              ></button>
            ))}
          </div>
          <p className='productPrice'>R$ {item.productPrice}</p>
          <p className='productName'>{item.productName}</p>
          <p className='productDescription'>{item.productDescription}</p>
          <a className='addToCart' href='/'>
            Adicionar
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default Shelf;