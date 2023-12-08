import React from "react";

// import styles
import './styles.css';


const Newsletter = () => {
    return (
     <>
        <div className="containerNewsletter">
            <div className="sectionNewsletter">
                <div className="inputForm">
                    <p className="titleNewsletter">Recebe Nossa Newsletter</p>
                    <div className="sectionInputNewsletter">
                    <label className="labelNewsletter">
                        <input className="inputEmail" name="myInput" placeholder="Digite seu Email" />
                        <button className="buttonSubmit" type="submit">Enviar</button>
                    </label>
                    </div>
                </div>
            </div>
        </div>
     </>
    );
  }
  
export default Newsletter;
  