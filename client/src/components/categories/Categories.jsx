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

  return (
    <CatDiv>
      <ViewAllDiv>
        <ViewAllA aria-label="View all categories" href="#">
          View all Categories <FiArrowRight />
        </ViewAllA>
      </ViewAllDiv>

      <FitnessLifestyle onClick={handleFitness}>
        <FitnessDiv>
          <FitnessButton>
            <ImgDiv>
              <FitnessImg src={Fitness} />
            </ImgDiv>
            <FitnessText>Fitness</FitnessText>
          </FitnessButton>
        </FitnessDiv>

        <LifestyleDiv onClick={handleLifestyle}>
          <LifestyleButton>
            <ImgDiv>
              <LifestyleImg src={Lifestyle} />
            </ImgDiv>
            <LifestyleText>Lifestyle</LifestyleText>
          </LifestyleButton>
        </LifestyleDiv>
      </FitnessLifestyle>

      <MedicalEntertainment onClick={handleEntertainment}>
        <EntertainmentDiv>
          <EntertainmentButton>
            <ImgDiv>
              <EntertainmentImg src={Entertainment} />
            </ImgDiv>
            <EntertainmentText>Entertainment</EntertainmentText>
          </EntertainmentButton>
        </EntertainmentDiv>

        <MedicalDiv onClick={handleMedical}>
          <MedicalButton>
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
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 835px) {
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`;

const ImgDiv = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
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

  &:hover {
    color: ${COLORS.orange};
  }
`;

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
