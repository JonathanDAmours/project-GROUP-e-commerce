import React from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import Cart from "../Cart/Cart";


export const NavContent = () => {
  return (
    <>
      <Item href="#">Categories</Item>
      <Item href="#">Brands</Item>
      <Item href="#">All Items</Item>
      <Cart />
    </>
  );
};

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

const Item = styled.a`
  color: #19100d;
  font-size: 1rem;
  text-decoration: none;
  margin-left: 30px;
  margin-top: 22px;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background: #d45e09;
    transition: width 0.3s;
    margin-top: 20px;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
