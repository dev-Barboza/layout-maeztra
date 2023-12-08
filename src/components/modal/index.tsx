import React from "react";
import Modal from "react-modal";
import "./styles.css";

import newslettericon from "../../assets/icons/newslettericon.svg";
import sendicon from "../../assets/icons/sendicon.svg"

interface ModalComponentProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Exemplo de Modal"
      className="modal-content"
    >
      <div className="containerModal">
        <button onClick={closeModal} className="close-button">
          Fechar
        </button>

        <div className="sectionModal">
          <div className="imageModa"></div>
          <div className="actionsModal">
            <div className="sectionActionsModal">
              <div className="messageModal">
                <img src={newslettericon} alt="/" />
                <p className="titleModal">Bem vindo à Maeztra</p>
              </div>
              <div className="messageModalSec">
                <p className="SeoModalCl">Receba em Primeira mão</p>
                <p className="SeopModalNl">desconto e ofertas exclusivas</p>
              </div>
              <div className="inputsModal">
                <input
                  className="inputEmailModal"
                  placeholder="Digite seu Email"
                  type="text"
                />
                <button className="inputSubmitModal" type="submit">
                  <span className="buttonSendModal">Enviar</span>
                  <img src={sendicon} alt="Ícone envio" />

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
