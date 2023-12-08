import React from "react";
// import componets


// import styles
import './styles.css';



const menuFooter = () => {
    return (
     <>
        <div className="containerMenuFooter">
            <div className="sectionMenuFooter">
                <div className="contentFooter">
                    <div className="infoFooter">
                        <nav className="navMenuFooter">
                            <ul className="ulMenuFooter">
                                <p className="titleMenuFooter">Informações</p>
                                <li className="linkMenuFooter"><a className="linkFooter" href="/">Quem Somos</a></li>
                                <li className="linkMenuFooter"><a  className="linkFooter" href="/">Prazo de Envio</a></li>
                                <li className="linkMenuFooter"><a className="linkFooter" href="/">Trocas e Devoluções</a></li>
                                <li className="linkMenuFooter"><a className="linkFooter" href="/">Promoções e Cupons</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="accountFooter">
                        <nav className="navMenuFooter">
                            <ul className="ulMenuFooter">
                                <p className="titleMenuFooter">Minha Conta</p>
                                <li className="linkMenuFooter"><a className="linkFooter" href="/">Minha Conta</a></li>
                                <li className="linkMenuFooter"><a  className="linkFooter" href="/">Meus Pedidos</a></li>
                                <li className="linkMenuFooter"><a  className="linkFooter" href="/">Cadastre-se</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="placeFooter">
                        <nav className="navMenuFooter">
                            <ul className="ulMenuFooter">
                                <p  className="titleMenuFooter" >Onde nos Encontrar</p>
                                <li className="linkMenuFooter"><a className="linkFooter" href="/">Lojas</a></li>
                                <li className="linkMenuFooter"><a className="linkFooter" href="/">Endereço</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
     </>
    );
  }
  
export default menuFooter;
  