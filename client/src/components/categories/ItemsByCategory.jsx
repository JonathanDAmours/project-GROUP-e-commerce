import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../all-items/Items";

export const ItemsByCategory = () => {
  const { categoryName } = useParams();
  const [itemsByCategory, setItemsByCategory] = useState([]);
  console.log(itemsByCategory);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCategoryByCategoryName = async () => {
      try {
        let data = await fetch(`/categories/${categoryName}`);
        data = await data.json();
        console.log(data);
        const items = data.data;
        setItemsByCategory(items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategoryByCategoryName();
  }, [categoryName]);

  if (!items) {
    return <p>loading...</p>;
  }

  return (
    <Wrapper>
      <NextPrevious></NextPrevious>
      <ItemsWrap>
        {itemsByCategory.map((item) => {
          return <Items key={item._id} item={item} />;
        })}
        ;
      </ItemsWrap>
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
  }
`;

const NextBtn = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
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
