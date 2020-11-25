import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Loading } from "../Loading";
import { requestAllBrands, responseAllBrands } from "../../actions";
import Items from "./items";

const AllItemsPage = () => {
  const [status, setStatus] = useState("loading");

  const [items, setItems] = useState([]);
  //limit is the amount of items per page right now we don't need a state but if ever we want the user to control the number of items per page it wil be necessary
  const [limit, setLimit] = useState(50);
  // offset is the index we have to start rendering items at for pages 2,3, etc.
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();

  //handlers
  const fetchItems = async (limit, offset) => {
    dispatch(requestAllBrands());
    try {
      let data = await fetch(`/items?limit=${limit}&skip=${offset}`);
      data = await data.json();
      let items = data.data;
      setItems(items);
      setStatus("idle");
      let reducerData = await fetch("/items");
      reducerData = await reducerData.json();
      let reducerItems = reducerData.data;
      dispatch(responseAllBrands(reducerItems));
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = () => {
    setOffset(offset + 50);
  };

  const previousPage = () => {
    setOffset(offset - 50);
  };

  useEffect(() => {
    fetchItems(limit, offset);
  }, [offset, setOffset]);

  if (!items || status === "loading") {
    return <Loading />;
  }

  return (
    <Wrapper>
      <NextPrevious>
        <span>
          <PrevBtn
            disabled={offset === 0 ? true : false}
            onClick={previousPage}
          >
            ←
          </PrevBtn>
        </span>
        <span>
          <NextBtn
            disabled={items.length < limit ? true : false}
            onClick={nextPage}
          >
            →
          </NextBtn>
        </span>
      </NextPrevious>
      <ItemsWrap>
        {items.map((item) => {
          return <Items key={item._id} item={item} status={status} />;
        })}
      </ItemsWrap>
      <NextPrevious>
        <span>
          <PrevBtn
            disabled={offset === 0 ? true : false}
            onClick={previousPage}
          >
            ←
          </PrevBtn>
        </span>
        <span>
          <NextBtn
            disabled={items.length < limit ? true : false}
            onClick={nextPage}
          >
            →
          </NextBtn>
        </span>
      </NextPrevious>
    </Wrapper>
  );
};

const PrevBtn = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
    visibility: hidden;
  }
`;

const NextBtn = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
    visibility: hidden;
  }
`;

const NextPrevious = styled.div`
  margin: 20px 0;
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 900px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 735px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

const ItemsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 90vw;
`;

export default AllItemsPage;
