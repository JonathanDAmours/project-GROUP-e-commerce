import React from "react";
import styled from "styled-components";

export const NavContent = () => {
  return (
    <>
      <Item href="#">Categories</Item>
      <Item href="#">Brands</Item>
      <Item href="#">All Items</Item>
    </>
  );
};

const Item = styled.a`
  color: #19100d;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #002673;
  }
`;
