import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

export const Footer = () => {
  const Links = (
    <FootLinks>
      <A href="#">About us</A>
      <A href="#">Privacy Policy</A>
      <A href="#">Legal Notes</A>
      <A href="#">Copyright</A>
    </FootLinks>
  );

  return (
    <FooterDiv>
      {Links}
      {Links}
      {Links}
      {Links}
    </FooterDiv>
  );
};

const FooterDiv = styled.section`
  display: flex;
  justify-content: space-around;
  height: 10rem;
  background-color: #a6a6a6;
`;

const FootLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  padding-top: 1.5rem;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  line-height: 1.7rem;

  &:hover {
    color: ${COLORS.orange};
  }
`;
