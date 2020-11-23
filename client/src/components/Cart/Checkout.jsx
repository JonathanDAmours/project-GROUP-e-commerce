import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { resetCart, updateError } from "../../actions";
import { getStoreItemArray } from "../../reducers/items-reducer";

const Auth = () => {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const storeItems = useSelector(getStoreItemArray);

  //handlers
  const updateStock = (e, _id, quantity) => {
    e.preventDefault();
    storeItems.map(async (item) => {
      quantity = item.quantity;
      try {
        let update = await fetch(`/items/${item._id}`, {
          headers: { "Content-Type": "application/json; charset=utf-8" },
          method: "PUT",
          body: JSON.stringify({
            numInStock: `${item.numInStock} - ${quantity}`,
          }),
        });
        update = await update.json();
        console.log(update);
        dispatch(resetCart());
      } catch (err) {
        console.log(err);
        dispatch(updateError());
      }
    });
  };

  return (
    <Wrapper>
      <div>
        <h1>Contact information</h1>
      </div>
      <div>
        <form>
          <label htmlFor="firstName">
            <input type="text" placeholder="first name" required />
          </label>
          <label htmlFor="lastName">
            <input type="text" placeholder="last name" required />
          </label>
          <label htmlFor="email">
            <input type="email" placeholder="email" required />
          </label>
          <label htmlFor="address">
            <input type="text" placeholder="address" required />
          </label>
          <label htmlFor="app.">
            <input type="text" placeholder="App. / Office" />
          </label>
          <label htmlFor="city">
            <input type="text" placeholder="City" required />
          </label>
          <label htmlFor="province">
            <input type="text" placeholder="Province / State" required />
          </label>
          <label htmlFor="zip">
            <input type="text" placeholder="Postal / Zip code" required />
          </label>
          <label htmlFor="country">
            <input type="text" placeholder="Country" required />
          </label>
          <h1>Payment information</h1>
          <label htmlFor="creditCard">
            <input type="text" placeholder="Credit Card Number" required />
          </label>
          <label htmlFor="expiration">
            <input type="text" placeholder="Expiration date" required />
          </label>
          <button type="submit" onSubmit={(e) => updateStock(e)}>
            proceed with payment
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: black;
`;

export default Auth;
