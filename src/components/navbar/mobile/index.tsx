// Navbar.tsx
import React from 'react';
import './styles.css';

import iconLogo from "../../../assets/icons/iconMaeztraOf.svg";
import iconMenu from "../../../assets/icons/icon-menu.svg";
import iconSearch from "../../../assets/icons/header.svg";
import iconCart from "../../../assets/icons/icon-shoppingbag.svg";



// Componente da Navbar
const NavbarMobile: React.FC = () => {
  return (
    <div className='NavbarContainerMobile'>
      <div className='SectionNavbarMobileCl'>
      <a className='drawer' href="/"><img src={iconMenu} alt="Menu drawer" /></a>
      <a className='Logo' href='/'><img src={iconLogo} alt="Icone Maeztra" /></a>
     </div>
     <div className='SectionNavbarMobileCM'>
      <a className='iconsearch' href="/"><img src={iconSearch} alt="Menu drawer" /></a>
      <a className='iconcart' href='/'><img src={iconCart} alt="Icone Maeztra" /></a>
     </div>
    </div>
  );
};

export default NavbarMobile;
