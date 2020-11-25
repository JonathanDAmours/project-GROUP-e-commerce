import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../Loading";
import Items from "../all-items/items";

export const ItemsByCategory = () => {
  const { categoryName } = useParams();
  const [itemsByCategory, setItemsByCategory] = useState([]);
  console.log(itemsByCategory);
  const [status, setStatus] = useState("loading");

  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(50);
  // offset is the index we have to start rendering items at for pages 2,3, etc.
  const [offset, setOffset] = useState(0);

  const nextPage = () => {
    console.log("INSIDE NEXTPAGE LOG");
    setOffset(offset + 50);
  };

  const previousPage = () => {
    setOffset(offset - 50);
  };

  const fetchCategoryByCategoryName = async (categoryName, limit, offset) => {
    try {
      let data = await fetch(
        `/categories/${categoryName}?limit=${limit}&skip=${offset}`
      );
      data = await data.json();
      console.log(data);
      const items = data.data;
      console.log({ limit: limit, categoryName: categoryName, offset: offset });
      setItemsByCategory(items);
      setStatus("idle");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategoryByCategoryName(categoryName, limit, offset);
  }, [offset, setOffset]);

  // useEffect(() => {
  //   fetchCategoryByCategoryName();
  // }, [categoryName]);

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
            disabled={itemsByCategory.length < limit ? true : false}
            onClick={nextPage}
          >
            →
          </NextBtn>
        </span>
      </NextPrevious>
      <ItemsWrap>
        {itemsByCategory.map((item) => {
          return <Items key={item._id} item={item} />;
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
            disabled={itemsByCategory.length < limit ? true : false}
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
    visibility: hidden;
    cursor: not-allowed;
    background-color: grey;
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
  justify-content: center;
  align-items: center;

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
