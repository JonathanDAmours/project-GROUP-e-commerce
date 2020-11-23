import Modal from "./Modal";
import React, { useState } from "react";
import styled from "styled-components";
import Checkout from "./Checkout";

const PaymentConf = ({ storeItems }) => {
  //payment confirmation modal open/close
  const [modalState, setModalState] = useState(false);

  //handlers
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div>
      <Button
        onClick={toggleModal}
        disabled={storeItems.length <= 0 ? true : false}
      >
        Purchase
      </Button>
      <Modal modalState={modalState} toggleModal={toggleModal}>
        <Checkout />
      </Modal>
    </div>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
`;

export default PaymentConf;
