import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Modal from "react-modal";
import NavbarComponent from "../../components/navbar/index";
import NavbarMobile from "../../components/navbar/mobile";
import Menu from "../../components/menu/index";
import Carrosel from "../../components/carrosel/index";
import BennefitsSlider from "../../components/bennefitsSlider/index";
import BrandSlider from "../../components/brandsSlider/index";
import Shelf from '../../components/shelf/index';
import BannerSeo from "../../components/bannerSeo/index";
import Newsletter from "../../components/newsletter/index";
import MenuFooter from "../../components/menuFooter/index";
import BottomBar from "../../components/bottomBar/index"
import MenuFooterMobile from "../../components/menuFooter/mobile/index";
import ModalComponent from "../../components/modal";

import './style.css';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="topBar">
        <p className="textTopBar">Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>
      {isMobile ? <NavbarMobile /> : <NavbarComponent />}
      <Menu />
      <Carrosel />
      <div className="containerSliderBenefits">
        <p className="titleSectionBenefits">Por que comprar na Maeztra?</p>
        <BennefitsSlider />
      </div>
      <div className="containerSliderBrands">
        <p className="titleSectionBrands">Marcas Parceiras</p>
        <BrandSlider />
      </div>

      <div className="containerSliderShelf">
        <p className="titleSectionBrands">As Mais Pedidas</p>
        <Shelf />
      </div>

      <div className="containerBannerSeo">
        <BannerSeo />
      </div>

      <Newsletter />
      {isMobile ? <MenuFooterMobile /> : <MenuFooter />}
      <BottomBar />

      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default Home;
