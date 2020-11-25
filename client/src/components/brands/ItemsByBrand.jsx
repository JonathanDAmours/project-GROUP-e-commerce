import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import Items from "../all-items/items";
import { Loading } from "../Loading";

export const ItemsByBrand = () => {
  const [itemsByBrand, setItemsByBrand] = useState([]);

  const [status, setStatus] = useState("loading");

  const { id } = useParams();
  console.log({ itembybrandcomp: IDBFactory });

  useEffect(() => {
    const fetchBrandbyId = async () => {
      try {
        let data = await fetch(`/items/brands/${id}`);
        data = await data.json();
        // console.log(data.items);
        const items = data.items;
        setItemsByBrand(items);
        setStatus("idle");
      } catch (err) {
        console.log(err);
      }
    };
    fetchBrandbyId();
  }, [id]);

  if (!itemsByBrand || status === "loading") {
    return <Loading />;
  }

  return (
    <Wrapper>
      <NextPrevious></NextPrevious>
      <ItemsWrap>
        {itemsByBrand.map((item) => {
          return <Items key={item._id} item={item} />;
        })}
      </ItemsWrap>
    </Wrapper>
  );
};

const NextPrevious = styled.div`
  margin: 20px 0;
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 40px;
  display: flex;
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
