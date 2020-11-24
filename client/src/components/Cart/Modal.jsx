import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Modal = ({ children, modalState, toggleModal }) => {
  return (
    <BackgroundWrap
      style={modalState ? { display: "block" } : { display: "none" }}
    >
      <ModalWrap>
        <div>{children}</div>
        <div>
          <XButton onClick={toggleModal}></XButton>
        </div>
      </ModalWrap>
    </BackgroundWrap>
  );
};

const XButton = styled(MdClose)`
  color: white;
  width: 20px;
  height: 20px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    color: #d45e09;
  }
  @media screen and (max-width: 600px) {
  }
`;

const ModalWrap = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: black;
  width: 50%;
  height: auto;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 600px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
`;

//this takes the whole screen blocks interaction on background and adds some opacity
const BackgroundWrap = styled.div`
  width: 100%;
  height: 103vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default Modal;
