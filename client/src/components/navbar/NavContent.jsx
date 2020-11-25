import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import Cart from "../Cart/Cart";

export const NavContent = ({
  fetchItems,
  setOffset,
  offset,
  limit,
  items,
  status,
}) => {
  return (
    <>
      <Item to="/categories" aria-label="Categories">
        Categories
      </Item>
      <Item to="/brands" aria-label="Brands">
        Brands
      </Item>
      <Item to="/items" aria-label="All items">
        All Items
      </Item>
      <Cart
        fetchItems={() => {
          fetchItems(limit, offset);
        }}
        setOffset={setOffset}
        offset={offset}
        limit={limit}
        items={items}
        status={status}
      />
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

const Item = styled(NavLink)`
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
