import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import DispatchLogoWhite from "./../assets/Dispatch_LogoWhite.png";

export const Footer = () => {
  return (
    <FooterDiv>
      <Logo src={DispatchLogoWhite} alt="Dispatch logo" />
      <Span>All right reserved - Dispatch 2020</Span>
    </FooterDiv>
  );
};
const Span = styled.p`
  color: white;
  font-size: 12px;
  padding-bottom: 20px;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  padding: 20px 0 10px 0;
`;

const FooterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: black;
  position: absolute;
  bottom: 0;
  margin-top: 80px;
  padding: 15px 0 15px 0;
`;
