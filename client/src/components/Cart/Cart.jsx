import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";

export default function Cart() {
  const [cart, setCart] = useState(false);

  const toggleCart = () => setCart(!cart);

  return (
    <div>
      <ButtonWrap>
        <Button onClick={toggleCart}>
          <StyledBiCart />
        </Button>
      </ButtonWrap>

      <CartWrap style={cart ? { width: "250px" } : { width: 0 }}>
        <div>
          <button onClick={toggleCart}>X</button>
          <h1>Your Cart</h1>
          <p>number of items</p>
        </div>
        {/* mapping over items in cart */}
        <div>
          {/* cartItem component */}
          cartItem component
        </div>
        <div>
          <p>Total</p>
          <button>checkout</button>
        </div>
      </CartWrap>
    </div>
  );
}

const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
`;

const CartWrap = styled.div`
  color: white;
  position: fixed;
  top: 0%;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 1s;
  height: 100vh;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledBiCart = styled(BiCart)`
  position: relative;
  top: 20px;
  width: 1rem;
  height: 1rem;
  color: #19100d;
  margin-left: 35px;

  &:hover {
    color: #d45e09;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
