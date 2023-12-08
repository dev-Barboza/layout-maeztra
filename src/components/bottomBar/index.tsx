import React from "react";

// import styles
import './styles.css';

// import images
import iconFacebook from "../../assets/icons/facebook.svg";
import iconLinkedin from "../../assets/icons/linkedin.svg";
import iconInstagram from "../../assets/icons/instagram.svg";
import iconYoutube from "../../assets/icons/youtube.svg";
import iconVisa from "../../assets/icons/visa.svg";
import iconMastercard from "../../assets/icons/mastercard.svg";
import iconVtex from "../../assets/icons/vtex.svg";
import iconMaeztra from "../../assets/icons/MaeztraLogo.svg";


const bottomBar = () => {
    return (
     <>
      <div className="containerBottomBar">
        <div className="sectionBottomBar">
          <div className="sectionSocias">
            <a href="/"><img src={iconFacebook} alt="" /></a>
            <a href="/"><img src={iconLinkedin} alt="" /></a>
            <a href="/"><img src={iconInstagram} alt="" /></a>
            <a href="/"><img src={iconYoutube} alt="" /></a>
          </div>
          <div className="sectionPayment">
            <a href="/"><img src={iconVisa} alt="" /></a>
            <a href="/"><img src={iconMastercard} alt="" /></a>
            <a href="/"><img src={iconVisa} alt="" /></a>
            <a href="/"><img src={iconMastercard} alt="" /></a>
          </div>
          <div className="sectionPartners">
            <a href="/"><img src={iconVtex} alt="" /></a>
            <a href="/"><img src={iconMaeztra} alt="" /></a>
          </div>
        </div>
      </div>
     </>
    );
  }
  
export default bottomBar;
  