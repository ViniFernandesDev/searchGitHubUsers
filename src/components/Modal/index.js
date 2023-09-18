import styled from "styled-components";
import PropTypes from "prop-types";

import { X } from "@phosphor-icons/react";
import { TextComponent } from "../Text/Text";

const Modal = ({ isOpen, onClose, selectedItem }) => {
  if (!isOpen || !selectedItem) {
    return null;
  }

  const { ...infos } = selectedItem; 

  const infosArray = Object.values(infos);
  
  console.log(infosArray)

  return (
    <Overlay>
      <Container>
        <Close onClick={onClose}>
          <X color="#ffffff" size={24} />
        </Close>

        <div>
          {infosArray?.map((item, index) => (
            <TextComponent key={index} variant="small">
              <a href={`${item}`} target="_blank" rel="noreferrer">{item}</a>
            </TextComponent>
          ))}
        </div>

      </Container>
    </Overlay>
  );
};

export { Modal }

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Indica se o modal está aberto ou fechado
  onClose: PropTypes.func.isRequired, // Função para fechar o modal
};

const Overlay = styled.div`
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(7px);
  position: fixed;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  z-index:2;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Container = styled.div`
  background: #ffffff;
  width: 60%;
  height: 50%;
  min-width: 500px;
  min-height: 500px;
  padding: 16px;
  border-radius: 8px;
  position: relative;
  box-shadow: 4px 4px 18px rgba(0,0,0,0.6);
  
  & p {
    margin-bottom:20px;
  }
  
  & a {
    word-break: break-all;
  }

  @media (max-width: 764px) {
    width: 50%;
    height: auto;
    min-width: 90%;
    min-height: auto;
  }
`;

const Close = styled.div`
  position: absolute;
  right: -12px;
  top: -12px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display:flex;
  justify-content: center;
  align-items:center;
  cursor:pointer;
  transition: 0.3s all;
  box-shadow: 0 0 18px rgba(0,0,0,0.6);

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: scale(1.05)
  }
`;

