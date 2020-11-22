import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../../actions";
import { COLORS } from "../../constants";

const Items = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageSrc, category, numInStock, _id } = item;

  // we need to acces all brands to get the name of the brand matching with companyId
  const brand = item.companyId;

  if (!item) {
    return null;
  }

  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>{category}</p>
      </div>
      <div>
        <img src={imageSrc} alt={name} />
      </div>
      <div>
        <p>{price}</p>
        {numInStock <= 0 ? (
          <p>Out of stock</p>
        ) : (
          <button onClick={() => dispatch(addToCart({ _id, name, price }))}>
            add to cart
          </button>
        )}
      </div>
    </>
  );
};

export default Items;
