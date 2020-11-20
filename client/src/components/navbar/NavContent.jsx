import React from "react";
import styled from "styled-components";
import {BiCart} from "react-icons/bi"

export const NavContent = () => {
  return (
    <>
      <Item href="#">Categories</Item>
      <Item href="#">Brands</Item>
      <Item href="#">All Items</Item>
      <StyledBiCart/>
    </>
  );
};

const StyledBiCart = styled(BiCart)`
position: relative;
top: -3px;
  width: 1rem;
  height: 1rem;
  color: #19100d;
  margin-left: 20px;
  
&:hover{
  color:#D45E09;
  }

`;

const Item = styled.a`
  color: #19100d;
  font-size: 1rem;
  text-decoration: none;
  margin-left: 25px;
  margin-top: 22px;


  &::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  background: #D45E09;
  transition: width .3s;
  margin-top: 20px;
  }

  &:hover::after{
    width: 100%;
  }
`;