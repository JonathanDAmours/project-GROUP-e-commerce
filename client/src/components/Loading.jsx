import React from "react";
import { IconContext } from "react-icons";
import { FiLoader } from "react-icons/fi";

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
    transform: roatate(0deg);
}
100% {
    transform: rotate(360deg)
}
`;

export const Loading = () => {
  return (
    <IconDiv>
      <IconContext.Provider value={{ size: "2rem" }}>
        <FiLoader />
      </IconContext.Provider>
    </IconDiv>
  );
};

const IconDiv = styled.div`
  display: flex;
  justify-content: center;

  animation: ${rotate} 2s linear infinite;

  margin-top: 5rem;
  opacity: 0.5;
`;
