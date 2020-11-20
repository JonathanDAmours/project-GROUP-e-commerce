import React from "react";
import styled from "styled-components";
import { NavContent } from "./NavContent";
import Logo from "../../assets/logo.png";

export const NavBar = () => {
  return (
    <Bar>
      <div>
        <LogoImg src={Logo} alt="dispatch logo" />
      </div>
      <ContentDiv>
        <NavContent />
      </ContentDiv>
    </Bar>
  );
};

const Bar = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//div for NavContent compontent
const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 4rem;
  margin-left: 2rem;
`;
