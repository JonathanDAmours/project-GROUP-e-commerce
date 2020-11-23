import React, { useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

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
        <ViewAllA aria-label="view all brands" to="/brands">
          View all Brands
          <FiArrowRight />
        </ViewAllA>
      </ViewAllDiv>

      <FirstRowOfThree>
        <NavWrapper to="/items/brands/13334">
          <CasioDiv>
            <CasioButton>
              <ImgDiv>
                <CasioImg src={Casio} />
              </ImgDiv>
            </CasioButton>
          </CasioDiv>
        </NavWrapper>

        <NavWrapper to="/items/brands/18834">
          <JawboneDiv>
            <JawboneButton>
              <ImgDiv>
                <JawboneImg src={Jawbone} />
              </ImgDiv>
            </JawboneButton>
          </JawboneDiv>
        </NavWrapper>

        <NavWrapper to="/items/brands/10713">
          <GarminDiv>
            <GarminButton>
              <ImgDiv>
                <GarminImg src={Garmin} />
              </ImgDiv>
            </GarminButton>
          </GarminDiv>
        </NavWrapper>
      </FirstRowOfThree>

      <SecondRowOfThree>
        <NavWrapper to="/items/brands/11932">
          <MisfitDiv>
            <MisfitButton>
              <ImgDiv>
                <MisfitImg src={Misfit} />
              </ImgDiv>
            </MisfitButton>
          </MisfitDiv>
        </NavWrapper>

        <NavWrapper to="/items/brands/11837">
          <PolarDiv>
            <PolarButton>
              <ImgDiv>
                <PolarImg src={Polar} />
              </ImgDiv>
            </PolarButton>
          </PolarDiv>
        </NavWrapper>

        <NavWrapper to="/items/brands/18432">
          <SamsungDiv>
            <SamsungButton>
              <ImgDiv>
                <SamsungImg src={Samsung} />
              </ImgDiv>
            </SamsungButton>
          </SamsungDiv>
        </NavWrapper>
      </SecondRowOfThree>
    </CatDiv>
  );
};

const NavWrapper = styled(NavLink)``;

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
    margin: 1.5rem 0 0 0;
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 1.5rem 0 0 0;
    &:hover {
      transform: none;
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
`;

const CasioImg = styled.img`
  position: relative;
  border-radius: 10px;
  height: 100px;

  transition: all 0.2s ease-in-out;
`;

const CasioText = styled.h3`
  position: absolute;
  color: black;
  font-size: 2.5rem;
`;

// view all Brands
const ViewAllDiv = styled.div`
  margin-top: 2rem;
`;

const ViewAllA = styled(NavLink)`
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

  @media screen and (max-width: 375px) {
    margin-top: 1rem;
  }
`;

const JawboneButton = styled(CasioButton)``;
const JawboneDiv = styled(CasioDiv)`
  margin-left: 1.5rem;

  @media screen and (max-width: 600px) {
    margin: 1.5rem 0 0 0;
  }
`;
const JawboneImg = styled(CasioImg)``;
const JawboneText = styled(CasioText)``;

const GarminButton = styled(CasioButton)``;
const GarminDiv = styled(CasioDiv)`
  margin-left: 1.5rem;
  @media screen and (max-width: 600px) {
    margin: 1.5rem 0 0 0;
  }
`;
const GarminImg = styled(CasioImg)``;

const SecondRowOfThree = styled(FirstRowOfThree)``;

const MisfitButton = styled(CasioButton)``;
const MisfitDiv = styled(CasioDiv)``;
const MisfitImg = styled(CasioImg)``;

const PolarButton = styled(CasioButton)``;
const PolarDiv = styled(CasioDiv)`
  margin-left: 1.5rem;
  @media screen and (max-width: 600px) {
    margin: 1.5rem 0 0 0;
  }
`;
const PolarImg = styled(CasioImg)``;

const SamsungButton = styled(CasioButton)``;
const SamsungDiv = styled(CasioDiv)`
  margin-left: 1.5rem;
  @media screen and (max-width: 600px) {
    margin: 1.5rem 0 0 0;
  }
`;
const SamsungImg = styled(CasioImg)``;
