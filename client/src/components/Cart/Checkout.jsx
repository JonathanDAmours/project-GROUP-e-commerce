import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { resetCart, updateError } from "../../actions";
import { getStoreItemArray } from "../../reducers/items-reducer";
import { COLORS, BOX_SHADOW } from "../../constants";

const Auth = ({
  success,
  setSuccess,
  firstName,
  setFirstname,
  fetchItems,
  setOffset,
  offset,
  limit,
  items,
  status,
}) => {
  const dispatch = useDispatch();
  const storeItems = useSelector(getStoreItemArray);

  //handlers
  const updateStock = (e) => {
    e.preventDefault();
    console.log(storeItems);
    storeItems.map(async (item) => {
      console.log(item);
      try {
        let update = await fetch(`/items/${item._id}`, {
          headers: { "Content-Type": "application/json; charset=utf-8" },
          method: "PATCH",
          body: JSON.stringify({
            numInStock: `${item.numInStock}` - `${item.quantity}`,
          }),
        });
        update = await update.json();
        setSuccess(true);
        dispatch(resetCart());
        await fetchItems();
        //Dispatch to update the specific items or just refecth everything
      } catch (err) {
        console.log(err);
        dispatch(updateError());
      }
    });
  };

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  };

  return (
    <Wrapper>
      {success ? (
        <div>
          <h1>
            Thank you <strong>{firstName}</strong> your ordered has been
            processed successfully!
          </h1>
        </div>
      ) : (
        <div>
          <Title>
            <Contact>Contact information</Contact>
          </Title>
          <div>
            <form onSubmit={updateStock}>
              <Naming>
                <label htmlFor="firstName">
                  <FirstName
                    value={firstName}
                    onChange={handleFirstName}
                    type="text"
                    placeholder="First name"
                    required
                  />
                </label>
                <label htmlFor="lastName">
                  <LastName type="text" placeholder="Last name" required />
                </label>
                <label htmlFor="email">
                  <Email type="email" placeholder="Email" required />
                </label>
              </Naming>
              <Title>
                <Contact>Location information</Contact>
              </Title>
              <Info>
                <label htmlFor="address">
                  <Add type="text" placeholder="Address" required />
                </label>
                <label htmlFor="app.">
                  <App type="text" placeholder="App. / Office" />
                </label>
                <label htmlFor="city">
                  <City type="text" placeholder="City" required />
                </label>
              </Info>
              <MoreInfo>
                <label htmlFor="province">
                  <Province
                    type="text"
                    placeholder="Province / State"
                    required
                  />
                </label>
                <label htmlFor="zip">
                  <Zip type="text" placeholder="Postal / Zip code" required />
                </label>
                <label htmlFor="country">
                  <Country type="text" placeholder="Country" required />
                </label>
              </MoreInfo>
              <SubTitle>
                <PaymentInfo>Payment information</PaymentInfo>
              </SubTitle>
              <CreditInfo>
                <label htmlFor="creditCard">
                  <Credit
                    type="text"
                    placeholder="Credit Card Number"
                    required
                  />
                </label>
                <label htmlFor="expiration">
                  <Expiration
                    type="text"
                    placeholder="Expiration date"
                    required
                  />
                </label>
              </CreditInfo>
              <ButtonDiv>
                <Button type="submit">Proceed with payment</Button>
              </ButtonDiv>
            </form>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

const Title = styled.div``;

const Contact = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Naming = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const FirstName = styled.input`
  border-radius: 5px;
  border: 2px solid ${COLORS.orange};
  padding: 3px 6px;
`;

const LastName = styled(FirstName)``;

const Email = styled(FirstName)``;

const Info = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Add = styled(FirstName)``;

const App = styled(FirstName)``;

const City = styled(FirstName)``;

const MoreInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Province = styled(FirstName)``;

const Zip = styled(FirstName)``;

const Country = styled(FirstName)``;

const SubTitle = styled.div``;

const PaymentInfo = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
`;

const CreditInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Credit = styled(FirstName)``;

const Expiration = styled(FirstName)``;

const ButtonDiv = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #d45e09;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  width: 40%;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: brown;
  }
  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

export default Auth;
