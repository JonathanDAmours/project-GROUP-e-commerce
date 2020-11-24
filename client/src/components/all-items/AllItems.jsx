import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { COLORS } from "../../constants";

export const AllItems = () => {
  return (
    <div>
      <AllItemsDiv>
        <ViewAllDiv>
          <ViewAllA aria-label="view all store items" to="/items">
            Shop All Items <FiArrowRight />
          </ViewAllA>
        </ViewAllDiv>
      </AllItemsDiv>
    </div>
  );
};

const AllItemsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;

const ViewAllDiv = styled.div``;

const ViewAllA = styled(NavLink)`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: ${COLORS.orange};
  margin-left: 0;
  &:hover {
    color: #ff852e;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    flex-wrap: wrap;
  }
`;
