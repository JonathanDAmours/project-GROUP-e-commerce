import React, { useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

import { COLORS } from "../../constants";

import styled from "styled-components";
import Casio from "../../assets/casioLogo.png";
import Garmin from "../../assets/garmin.png";
import Jawbone from "../../assets/jawbone.png";
import Misfit from "../../assets/misfit.png";
import Polar from "../../assets/polar.png";
import Samsung from "../../assets/samsung.png";

// displays our Brands
export const Brands = () => {
  return (
    <CatDiv>
      <ViewAllDiv>
        <ViewAllA aria-label="view all brands" href="#">
          View all Brands
          <FiArrowRight />
        </ViewAllA>
      </ViewAllDiv>

      <FirstRowOfThree>
        <CasioDiv>
          <CasioButton>
            <ImgDiv>
              <CasioImg src={Casio} />
            </ImgDiv>
          </CasioButton>
        </CasioDiv>

        <JawboneDiv>
          <JawboneButton>
            <ImgDiv>
              <JawboneImg src={Jawbone} />
            </ImgDiv>
          </JawboneButton>
        </JawboneDiv>

        <GarminDiv>
          <GarminButton>
            <ImgDiv>
              <GarminImg src={Garmin} />
            </ImgDiv>
          </GarminButton>
        </GarminDiv>
      </FirstRowOfThree>

      <SecondRowOfThree>
        <MisfitDiv>
          <MisfitButton>
            <ImgDiv>
              <MisfitImg src={Misfit} />
            </ImgDiv>
          </MisfitButton>
        </MisfitDiv>

        <PolarDiv>
          <PolarButton>
            <ImgDiv>
              <PolarImg src={Polar} />
            </ImgDiv>
          </PolarButton>
        </PolarDiv>

        <SamsungDiv>
          <SamsungButton>
            <ImgDiv>
              <SamsungImg src={Samsung} />
            </ImgDiv>
          </SamsungButton>
        </SamsungDiv>
      </SecondRowOfThree>
    </CatDiv>
  );
};

const CatDiv = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  margin-bottom: 2rem;
`;

const FirstRowOfThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 2rem;
`;

const CasioButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const CasioDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-right: 1.5rem;

  &:hover {
    transform: scale(1.07);
  }

  @media screen and (max-width: 835px) {
    &:hover {
      transform: none;
      margin: 1.5rem 1.5rem 10px 0;
    }
  }

  @media screen and (max-width: 600px) {
    &:hover {
      transform: none;
      margin: 1.5rem 1.5rem 0 0;
    }
  }
`;

const ImgDiv = styled.div`
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 150px;
  width: 250px;

  transition: all 0.2s ease-in-out;
  &:hover {
  }
`;

const CasioImg = styled.img`
  position: relative;
  border-radius: 10px;
  height: 100px;

  transition: all 0.2s ease-in-out;
  &:hover {
  }
`;

const CasioText = styled.h3`
  position: absolute;
  color: black;
  font-size: 2.5rem;

  &:hover {
  }
`;

// view all Brands
const ViewAllDiv = styled.div`
  margin-top: 2rem;
`;

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

const JawboneButton = styled(CasioButton)``;
const JawboneDiv = styled(CasioDiv)`
  margin-left: 1.5rem;
`;
const JawboneImg = styled(CasioImg)``;
const JawboneText = styled(CasioText)``;

const GarminButton = styled(CasioButton)``;
const GarminDiv = styled(CasioDiv)`
  margin-left: 1.5rem;
`;
const GarminImg = styled(CasioImg)``;

const SecondRowOfThree = styled(FirstRowOfThree)``;

const MisfitButton = styled(CasioButton)``;
const MisfitDiv = styled(CasioDiv)``;
const MisfitImg = styled(CasioImg)``;

const PolarButton = styled(CasioButton)``;
const PolarDiv = styled(CasioDiv)`
  margin-left: 1.5rem;
`;
const PolarImg = styled(CasioImg)``;

const SamsungButton = styled(CasioButton)``;
const SamsungDiv = styled(CasioDiv)`
  margin-left: 1.5rem;
`;
const SamsungImg = styled(CasioImg)``;
