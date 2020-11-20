import React from "react";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import Fitness from "../assets/fitness.png";
import Lifestyle from "../assets/lifestyle.png";
import Entertainment from "../assets/entertainment.png";
import Medical from "../assets/medical.png";

// displays our categories
export const Categories = () => {
  return (
    <CatDiv>
      <FitnessLifestyle>
        <FitnessButton>
          <FitnessDiv>
            <ImgDiv>
              <FitnessImg src={Fitness} />
            </ImgDiv>
            <FitnessText>Fitness</FitnessText>
          </FitnessDiv>
        </FitnessButton>

        <LifestyleButton>
          <LifestyleDiv>
            <ImgDiv>
              <LifestyleImg src={Lifestyle} />
            </ImgDiv>
            <LifestyleText>Lifestyle</LifestyleText>
          </LifestyleDiv>
        </LifestyleButton>
      </FitnessLifestyle>

      <MedicalEntertainment>
        <EntertainmentButton>
          <EntertainmentDiv>
            <ImgDiv>
              <EntertainmentImg src={Entertainment} />
            </ImgDiv>
            <EntertainmentText>Entertainment</EntertainmentText>
          </EntertainmentDiv>
        </EntertainmentButton>

        <MedicalButton>
          <MedicalDiv>
            <ImgDiv>
              <MedicalImg src={Medical} />
            </ImgDiv>
            <MedicalText>Medical</MedicalText>
          </MedicalDiv>
        </MedicalButton>
      </MedicalEntertainment>

      {/* <ViewAllDiv>
        <a href="#">
          View all
          <FiArrowRight />
        </a>
      </ViewAllDiv> */}
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
  left: 50%;
  align-items: center;
  justify-content: space-around;
  width: 65%;
  margin-top: 3rem;
`;

const FitnessButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const FitnessDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-radius: 10px;
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
`;

const LifestyleButton = styled(FitnessButton)``;
const LifestyleDiv = styled(FitnessDiv)``;
const LifestyleImg = styled(FitnessImg)``;
const LifestyleText = styled(FitnessText)``;

const MedicalEntertainment = styled(FitnessLifestyle)``;

const EntertainmentButton = styled(FitnessButton)``;
const EntertainmentDiv = styled(FitnessDiv)``;
const EntertainmentImg = styled(FitnessImg)``;
const EntertainmentText = styled(FitnessText)``;

const MedicalButton = styled(FitnessButton)``;
const MedicalDiv = styled(FitnessDiv)``;
const MedicalImg = styled(FitnessImg)``;
const MedicalText = styled(FitnessText)``;

const ViewAllDiv = styled.div``;
