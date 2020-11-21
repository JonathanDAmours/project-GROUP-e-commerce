import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";

export default function Cart() {
  const [cart, setCart] = useState(false);

  /// CONDITIONAL RENDERING FOR IPAD-MOBILE
  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width, height };
  };
  const { width } = useViewport();
  const mobilebreakpoint = 600;

  // toggles (cart and burger)
  const toggleCart = () => setCart(!cart);

  return (
    <div>
      {" "}
      {width > mobilebreakpoint ? (
        <ButtonWrap>
          <Button onClick={toggleCart}>
            <StyledBiCart />
          </Button>
        </ButtonWrap>
      ) : (
        <div>
          <button onClick={toggleCart}>View Cart</button>
        </div>
      )}
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
