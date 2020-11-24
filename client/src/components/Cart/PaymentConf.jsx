import Modal from "./Modal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducers/items-reducer";
import styled from "styled-components";
import Checkout from "./Checkout";

const PaymentConf = () => {
  //payment confirmation modal open/close
  const [modalState, setModalState] = useState(false);
  const [success, setSuccess] = useState(false);
  const [firstName, setFirstname] = useState("");
  const storeItems = useSelector(getStoreItemArray);

  //handlers
  const toggleModal = () => {
    setModalState(!modalState);
    setSuccess(false);
    setFirstname("");
  };

  return (
    <div>
      <Button
        onClick={toggleModal}
        disabled={storeItems.length <= 0 ? true : false}
      >
        Purchase
      </Button>
      {}
      <Modal
        modalState={modalState}
        toggleModal={toggleModal}
        setSuccess={setSuccess}
      >
        <Checkout
          success={success}
          setSuccess={setSuccess}
          setFirstname={setFirstname}
          firstName={firstName}
        />
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
