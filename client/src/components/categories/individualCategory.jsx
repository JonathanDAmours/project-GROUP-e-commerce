import React from "react";
import styled from "styled-components";

import { COLORS, BOX_SHADOW } from "../../constants";

export const IndividualCategory = (props) => {
  const { category } = props;
  return (
    <>
      <Button>
        <CategoryDiv>
          <CategoryName>{category}</CategoryName>
        </CategoryDiv>
      </Button>
    </>
  );
};

const CategoryDiv = styled.div`
  display: flex;
  justify-content: center;

  line-height: 1.4rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${COLORS.orange};
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  // background: rgb(255,229,210);
  // background: linear-gradient(180deg, rgba(255,229,210,0.3) 3%, rgba(212,94,9,0.3) 94%);
  margin: 1.5rem;
  width: 300px;
  border-radius: 10px;
  padding: 2rem;

  box-shadow: ${BOX_SHADOW.regularButton};

  &:hover {
    box-shadow: ${BOX_SHADOW.hoverButton};
  }
`;

const CategoryName = styled.h2``;
