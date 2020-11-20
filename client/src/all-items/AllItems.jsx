import React from "react";
import { FiArrowRight } from "react-icons/fi";

import styled from "styled-components";

import { COLORS } from "../constants";
import Cyclist from "../assets/cyclist3.jpg";

export const AllItems = () => {
  return (
    <div>
      <AllItemsDiv>
        <CyclistDiv>
          <CyclistButton>
            <ImgDiv>
              <CyclistImg src={Cyclist} />
            </ImgDiv>
            <CyclistText>Shop All Items</CyclistText>
          </CyclistButton>
        </CyclistDiv>
        <ViewAllDiv>
          <ViewAllA aria-label="view all store items" href="#">
            View all <FiArrowRight />
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
  margin-top: 3rem;
  margin-bottom: 7rem;
`;

const CyclistButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const CyclistDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-right: 1.5rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const ImgDiv = styled.div`
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const CyclistImg = styled.img`
  position: relative;
  z-index: -10;
  border-radius: 10px;
  max-height: 18rem;
`;

const CyclistText = styled.h3`
  position: absolute;
  z-index: 10;
  color: white;
  font-size: 2.5rem;

  &:hover {
    color: ${COLORS.orange};
  }
`;

const ViewAllDiv = styled.div``;

const ViewAllA = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${COLORS.orange};
  margin-left: 0;
  &:hover {
    color: #ff852e;
  }
`;
