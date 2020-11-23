import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { getStoreItemArray } from "../../reducers/items-reducer";
import { CartItem } from "./CartItem";
import PaymentConf from "./PaymentConf";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const storeItems = useSelector(getStoreItemArray);
  // cart open/close
  const [cart, setCart] = useState(true);

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

  let preTotal = [];
  if (storeItems.length > 0) {
    storeItems.map((item) =>
      preTotal.push(
        Number(item?.quantity) * item?.price?.replace(/[^0-9.-]+/g, "")
      )
    );
  }
  let total = preTotal?.reduce((a, b) => a + b, 0);
  let totalFormat = (Math.round(total * 100) / 100).toFixed(2);

  const preSum = [];
  storeItems.map((item) =>
  preSum.push(item?.quantity))
  const sum = preSum?.reduce((a, b) => a + b, 0);

  console.log(sum);
  return (
    <Wrapper>
      {" "}
      {width > mobilebreakpoint ? (
        <ButtonWrap>
          <Button onClick={toggleCart}>
            {storeItems.length <= 0 ? <StyledBiCart /> : <Div><StyledBiCartOrange /><Notification /></Div>}
          </Button>
        </ButtonWrap>
      ) : (
        <div>
          <BurgerCart onClick={toggleCart}>View Cart</BurgerCart>
        </div>
      )}
      {width > mobilebreakpoint ? (
        <CartWrap style={cart ? { right: "-300px" } : { right: 0 }}>
          <Main>
            <TopSection>
              <Top>
                <div>
                  <YourCart>Your cart</YourCart>
                </div>
                <div>
                  <XButton onClick={toggleCart}>X</XButton>
                </div>
              </Top>
              <NumberItems>{sum} item(s)</NumberItems>
            </TopSection>

            {/* mapping over items in cart */}
            <ScrollDiv>
              {storeItems.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    price={item.price}
                    title={item.name}
                    quantity={item.quantity}
                    _id={item._id}
                  />
                );
              })}
            </ScrollDiv>
          </Main>
          <PurchaseSection>
            <Total>
              Total: <strong>${totalFormat}</strong>
            </Total>
            <PurchaseBtn>
              <Span>
                {/* ---------------------------------the button of Payment confirmation opens the modal-------------------------- */}
                <PaymentConf storeItems={storeItems} />
              </Span>
            </PurchaseBtn>
          </PurchaseSection>
        </CartWrap>
      ) : (
        ///////////////////
        <CartWrapMobile style={cart ? { right: "-600px" } : { right: 0 }}>
          <Main>
            <TopSection>
              <Top>
                <div>
                  <YourCart>Your cart</YourCart>
                </div>
                <div>
                  <XButton onClick={toggleCart}>X</XButton>
                </div>
              </Top>
              <NumberItems>{sum} item(s)</NumberItems>
            </TopSection>

            {/* mapping over items in cart */}
            <ScrollDiv>
              {storeItems.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    price={item.price}
                    title={item.name}
                    quantity={item.quantity}
                    _id={item._id}
                  />
                );
              })}
            </ScrollDiv>
          </Main>
          <PurchaseSection>
            <Total>
              Total: <strong>${totalFormat}</strong>
            </Total>
            <PurchaseBtn>
              <Span>
                <PaymentConf />
              </Span>
            </PurchaseBtn>
          </PurchaseSection>
        </CartWrapMobile>
      )}
    </Wrapper>
  );
}

const ScrollDiv = styled.div`
  height: 75vh;
  overflow: auto;

  @media screen and (max-width: 600px) {
    height: 70vh;
  }
`;

const Main = styled.div`
  @media screen and (max-width: 600px) {
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
  }
`;

const Span = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: white;
  position: relative;
  top: -1px;
  @media screen and (max-width: 600px) {
  }
`;

const Total = styled.p`
  color: white;
  font-size: 16px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 600px) {
  }
`;

const PurchaseSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
  }
`;

const PurchaseBtn = styled.button`
  background-color: #d45e09;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  width: 40%;
  height: 40px;
  border-radius: 20px;
  @media screen and (max-width: 600px) {
  }
`;

const NumberItems = styled.p`
  color: white;
  font-size: 12px;
  margin-top: 2px;
  @media screen and (max-width: 600px) {
    text-align: left;
  }
`;

const YourCart = styled.h1`
  font-size: 30px;
  color: white;
  font-weight: 100;
  @media screen and (max-width: 600px) {
  }
`;

const TopSection = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid white;
  @media screen and (max-width: 600px) {
  }
`;

const XButton = styled(MdClose)`
  color: white;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
    color: #d45e09;
  }
  @media screen and (max-width: 600px) {
  }
`;

const BurgerCart = styled.button`
  color: #19100d;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  padding: 31px 0;
  border: none;
  border-bottom: 1px solid #d45e09;
  cursor: pointer;
  background-color: white;
  outline: none;
  width: 100%;

  &:hover {
    background-color: #d45e09;
  }
  @media screen and (max-width: 600px) {
  }
`;

const Wrapper = styled.div`
  display: block;
  z-index: 1000;
  @media screen and (max-width: 600px) {
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  @media screen and (max-width: 600px) {
  }
`;

const CartWrapMobile = styled.div`
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  background-color: black;
  border-left: 4px solid #d45e09;
  overflow-x: hidden;
  transition: 1s;
  height: 100vh;
  width: 100vw;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
  }
`;

const CartWrap = styled.div`
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  background-color: black;
  border-left: 4px solid #d45e09;
  transition: 1s;
  height: 100vh;
  width: 300px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 600px) {
  }
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

const StyledBiCartOrange = styled(BiCart)`
  position: relative;
  top: 20px;
  width: 1rem;
  height: 1rem;
  margin-left: 35px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Notification = styled.div`
background-color: #d45e09;
width: 8px;
height: 8px;
border-radius: 50%;
position: absolute;
left: 46px;
`;


const Div = styled.div`
position: relative;
`;