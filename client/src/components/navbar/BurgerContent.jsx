import React from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";

export const BurgerContent = () => {
  return (
  
    <Wrapper>
    <Item href="#">Categories</Item>
    <Item href="#">Brands</Item>
    <Item href="#">All Items</Item>
    <Item href="#">View Cart</Item>
  </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

const Item = styled.a`
  color: #19100d;
  font-size: 1rem;
  text-decoration: none;
  padding: 31px 0;
  border-bottom: 1px solid #d45e09;
  cursor: pointer;
`;
