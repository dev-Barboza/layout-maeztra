import React, { useState } from "react";
import './styles.css';

const MenuFooterMobile = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [showPlace, setShowPlace] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
        setShowAccount(false);
        setShowPlace(false);
    };

    const toggleAccount = () => {
        setShowAccount(!showAccount);
        setShowInfo(false);
        setShowPlace(false);
    };

    const togglePlace = () => {
        setShowPlace(!showPlace);
        setShowInfo(false);
        setShowAccount(false);
    };

    return (
        <>
            <div className="containerMenuFooterMobile">
                <div className="sectionMenuFooterMobile">
                    <div className="contentFooterMobile">
                        <div className="infoFooterMobile">
                            <nav className="navMenuFooterMobile">
                                <ul className="ulMenuFooterMobile">
                                    <p className="titleMenuFooterMobile" onClick={toggleInfo}>
                                        Informações
                                    </p>
                                    {showInfo && (
                                        <>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Quem Somos</a></li>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Prazo de Envio</a></li>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Trocas e Devoluções</a></li>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Promoções e Cupons</a></li>
                                        </>
                                    )}
                                </ul>
                            </nav>
                        </div>
                        <div className="accountFooterMobile">
                            <nav className="navMenuFooterMobile">
                                <ul className="ulMenuFooterMobile">
                                    <p className="titleMenuFooterMobile" onClick={toggleAccount}>
                                        Minha Conta
                                    </p>
                                    {showAccount && (
                                        <>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Minha Conta</a></li>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Meus Pedidos</a></li>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Cadastre-se</a></li>
                                        </>
                                    )}
                                </ul>
                            </nav>
                        </div>
                        <div className="placeFooterMobile">
                            <nav className="navMenuFooterMobile">
                                <ul className="ulMenuFooterMobile">
                                    <p className="titleMenuFooterMobile" onClick={togglePlace}>
                                        Onde nos Encontrar
                                    </p>
                                    {showPlace && (
                                        <>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Lojas</a></li>
                                            <li className="linkMenuFooterMobile"><a className="linkFooterMobile" href="/">Endereço</a></li>
                                        </>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuFooterMobile;
