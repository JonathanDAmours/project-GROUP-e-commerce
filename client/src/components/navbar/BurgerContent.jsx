import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Cart from "../Cart/Cart";

export const BurgerContent = ({
  fetchItems,
  setOffset,
  offset,
  limit,
  items,
  status,
}) => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  position: fixed;
  width: 100%;
`;

const Item = styled(NavLink)`
  color: #19100d;
  font-size: 1rem;
  text-decoration: none;
  padding: 31px 0;
  background-color: white;
  border-bottom: 1px solid #d45e09;
  cursor: pointer;

  &:hover {
    background-color: #d45e09;
  }
`;
