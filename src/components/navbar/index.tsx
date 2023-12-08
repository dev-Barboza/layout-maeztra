// Navbar.tsx
import React from 'react';
import './styles.css';

import iconLogo from "../../assets/icons/logoMaeztra.svg";
import iconbag from "../../assets/icons/iconbag.svg";
import iconheart from "../../assets/icons/iconheart.svg";
import iconuser from "../../assets/icons/iconuser.svg";


// Componente da Navbar
const Navbar: React.FC = () => {
  return (
    <div className='NavbarContainer'>
      <div className='SectionNavbar'>
      <a className='Logo' href='/'><img src={iconLogo} alt="Icone Maeztra" /></a>
      <div className='SearchBar'>
        <input className='SearchInput' type="text" placeholder="O que você busca?" />
        <input className='SearchButton' type='submit' value='Buscar'/>
      </div>
      <div className='ButtonsContainer'>
        <button className='Button'>
            <img src={iconuser} alt="" />
            <p className='CategoryMenuUser'>Minha Conta</p>
        </button>
        <button className='Button'>
            <img src={iconheart} alt="" />
            <p className='CategoryMenuUser'>Minha Conta</p>
        </button>
        <button className='ButtonCart'>
            <img src={iconbag} alt="" />
            <p className='CategoryMenuUser'>Minha Conta</p>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
