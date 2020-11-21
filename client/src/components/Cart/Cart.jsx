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
    <Wrapper>
      {" "}
      {width > mobilebreakpoint ? (
        <ButtonWrap>
          <Button onClick={toggleCart}>
            <StyledBiCart />
          </Button>
        </ButtonWrap>
      ) : (
        <div>
          <BurgerCart onClick={toggleCart}>View Cart</BurgerCart>
        </div>
      )}
      <CartWrap style={cart ? { right: "-250px" } : { right: 0 }}>
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
    </Wrapper>
  );
}

const BurgerCart = styled.button `
  color: #19100d;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  padding: 31px 0;
  border: none;
  border-bottom: 1px solid #d45e09;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  width: 100%;
 `;


const Wrapper = styled.div `
display: block;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
`;

const CartWrap = styled.div`
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 1s;
  height: 100vh;
  width: 250px;
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
