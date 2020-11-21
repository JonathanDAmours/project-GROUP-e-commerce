import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Items = ({ item }) => {
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
      </div>
    </>
  );
};

export default Items;
