import React from "react";
import styled from "styled-components";

const Modal = ({ children, modalState, toggleModal }) => {
  return (
    <BackgroundWrap
      style={modalState ? { display: "block" } : { display: "none" }}
    >
      <ModalWrap>
        <div>{children}</div>
        <div>
          <button onClick={toggleModal}>close</button>
        </div>
      </ModalWrap>
    </BackgroundWrap>
  );
};

const ModalWrap = styled.div`
  margin: 25% auto;
  background-color: white;
  width: 75%;
  height: auto;
  border: solid black 1px;
`;

//this takes the whole screen blocks interaction on background and adds some opacity
const BackgroundWrap = styled.div`
  width: 100%;
  height: 103 vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default Modal;
