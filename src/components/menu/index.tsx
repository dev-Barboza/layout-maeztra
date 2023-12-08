import React from "react";

import "./styles.css"

import iconDress from "../../assets/icons/icon-dress.svg";

type Product = {
  id: number;
  categoryName: string;
  iconCategory: string;
};

const categorias: Product[] = [
  { id: 1, categoryName: 'Novidades', iconCategory: iconDress },
  { id: 2, categoryName: 'Vestidos', iconCategory: "" },
  { id: 3, categoryName: 'Roupas', iconCategory: "" },
  { id: 4, categoryName: 'Sapatos', iconCategory: "" },
  { id: 5, categoryName: 'Lengerie', iconCategory: "" },
  { id: 6, categoryName: 'Acessórios', iconCategory: "" },
  { id: 7, categoryName: 'OUTLET', iconCategory: "" },
];

const Menu = () => {
  return (
    <div className="MenuContainer" >
      <div className="Sectionmenu">
        {categorias.map((categoria) => (
          <div className="itenCategory" key={categoria.id}>
            <img src={categoria.iconCategory} alt="" />
            <a className="LinkCategory">{categoria.categoryName}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
