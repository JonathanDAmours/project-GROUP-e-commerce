import React from "react";
import styled from "styled-components";
import { NavContent } from "./NavContent";
import DispatchLogo from "../../assets/Dispatch_Logo.png";

export const NavBar = () => {
  return (
    <Bar>
      <Logo>
        <LogoImg src={DispatchLogo} alt="Dispatch logo" />
      </Logo>
      <ContentDiv>
        <NavContent />
      </ContentDiv>
    </Bar>
  );
};

const Logo = styled.div`
margin: 0;`;

const Bar = styled.div`
  position: sticky;
  top: 0;
  padding: 0 20px 0 20px;
  width: 100%;
  height: 3.8rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // for media, put menu in a hamburglar?
`;


//div for NavContent compontent
const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const LogoImg = styled.img`
  height: 4rem;
  width: 125px;
  height: auto;
`;
