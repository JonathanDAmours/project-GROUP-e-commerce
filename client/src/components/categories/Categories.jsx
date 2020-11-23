import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import Fitness from "../../assets/fitness.png";
import Lifestyle from "../../assets/lifestyle.png";
import Entertainment from "../../assets/entertainment.png";
import Medical from "../../assets/medical.png";
import { COLORS } from "../../constants";

// displays our categories
export const Categories = () => {
  let history = useHistory();

  const handleFitness = () => {
    history.push(`/categories/Fitness`);
  };

  const handleLifestyle = () => {
    history.push(`/categories/Lifestyle`);
  };

  const handleEntertainment = () => {
    history.push(`/categories/Entertainment`);
  };

  const handleMedical = () => {
    history.push(`/categories/Medical`);
  };

  const handleCategories = () => {
    history.push(`/categories/`);
  };

  return (
    <CatDiv>
      <ViewAllDiv>
        <ViewAllA aria-label="View all categories" onClick={handleCategories}>
          View all Categories <FiArrowRight />
        </ViewAllA>
      </ViewAllDiv>

      <FitnessLifestyle>
        <FitnessDiv>
          <FitnessButton onClick={handleFitness}>
            <ImgDiv>
              <FitnessImg src={Fitness} />
            </ImgDiv>
            <FitnessText>Fitness</FitnessText>
          </FitnessButton>
        </FitnessDiv>

        <LifestyleDiv>
          <LifestyleButton onClick={handleLifestyle}>
            <ImgDiv>
              <LifestyleImg src={Lifestyle} />
            </ImgDiv>
            <LifestyleText>Lifestyle</LifestyleText>
          </LifestyleButton>
        </LifestyleDiv>
      </FitnessLifestyle>

      <MedicalEntertainment>
        <EntertainmentDiv>
          <EntertainmentButton onClick={handleEntertainment}>
            <ImgDiv>
              <EntertainmentImg src={Entertainment} />
            </ImgDiv>
            <EntertainmentText>Entertainment</EntertainmentText>
          </EntertainmentButton>
        </EntertainmentDiv>

        <MedicalDiv>
          <MedicalButton onClick={handleMedical}>
            <ImgDiv>
              <MedicalImg src={Medical} />
            </ImgDiv>
            <MedicalText>Medical</MedicalText>
          </MedicalButton>
        </MedicalDiv>
      </MedicalEntertainment>
    </CatDiv>
  );
};

const CatDiv = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`;

const FitnessLifestyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 3rem;
`;

const FitnessButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  width: 100%;
`;

const FitnessDiv = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-right: 1.5rem;
  margin-bottom: 10px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.33);

  overflow: hidden;

  /* &:hover {
    transform: scale(1.05);
  } */

  @media screen and (max-width: 835px) {
    margin: 1.5rem 0 10px 0;

    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 1.5rem 20px 10px 20px;

    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 1.5rem 0 10px 0;

    &:hover {
      transform: none;
    }
  }
`;

const ImgDiv = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;

  transition: transform 0.4s;

  &:hover {
    transform: scale(1.05);
  }
`;

const FitnessImg = styled.img`
  position: relative;
  z-index: -10;
  border-radius: 10px;
`;

const FitnessText = styled.h3`
  position: absolute;
  z-index: 10;
  color: white;
  font-size: 2.5rem;

  /* &:hover {
    color: ${COLORS.orange};
  } */
`;

const ViewAllDiv = styled.div`
  margin-top: 2rem;

  @media screen and (max-width: 375px) {
    margin-top: 1rem;
  }
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
const LifestyleButton = styled(FitnessButton)``;
const LifestyleDiv = styled(FitnessDiv)`
  margin-left: 1.5rem;

  @media screen and (max-width: 835px) {
    margin-left: 0;
  }

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;
const LifestyleImg = styled(FitnessImg)``;
const LifestyleText = styled(FitnessText)``;

const MedicalEntertainment = styled(FitnessLifestyle)`
  flex-wrap: wrap;

  @media screen and (max-width: 835px) {
    margin-top: 0;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

const EntertainmentButton = styled(FitnessButton)``;
const EntertainmentDiv = styled(FitnessDiv)``;
const EntertainmentImg = styled(FitnessImg)``;
const EntertainmentText = styled(FitnessText)``;

const MedicalButton = styled(FitnessButton)``;
const MedicalDiv = styled(FitnessDiv)`
  margin-left: 1.5rem;

  @media screen and (max-width: 835px) {
    margin-left: 0;
  }

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;
const MedicalImg = styled(FitnessImg)``;
const MedicalText = styled(FitnessText)``;
