import React from "react";
import styled from "styled-components";

import { NavBar } from "../navbar/NavBar";
import Banner from "../../assets/Banner.jpg"
import { Categories } from "../../categories/Categories";

export const HomePage = () => {
  return (
    <Wrapper>
      <NavBar />
      <ImgDiv>
        <BannerImg src={Banner} />
        <Quote>Persistence can change failure <br></br>into extraordinary <Span>achievement.</Span></Quote>
      </ImgDiv>

      <NavigationHeadersDiv>
        <NavigationHeaders>Shop by Category</NavigationHeaders>
        <Categories />
      </NavigationHeadersDiv>

      <NavigationHeadersDiv>
        <NavigationHeaders>Shop by Brand</NavigationHeaders>
        <p>brand component here</p>
      </NavigationHeadersDiv>

      <NavigationHeadersDiv>
        <NavigationHeaders>Shop All Items</NavigationHeaders>
        <p>allitems component here</p>
      </NavigationHeadersDiv>
    </Wrapper>
  );
};

const Span = styled.span`
color: #D45E09;
font-weight: 600;
`;

const Quote = styled.h1`
font-style: italic;
position: absolute;
top: 260px;
width: 100%;
font-size: 40px;
font-weight: 100;
text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
color: white;
margin: 0 40px;
z-index:-8;

@media screen and (max-width: 768px) {
    font-size: 30px;
    top: 260px;
  }

@media screen and (max-width: 600px) {
    font-size: 20px;
    top: 200px;
  }
`;


const Wrapper = styled.div`
`;

const ImgDiv = styled.div`
  display: flex;
  position: relative;
`;

const BannerImg = styled.img`
  height: auto;
  width: 100%;
  z-index: -10;
`;

const NavigationHeadersDiv = styled.div`
  margin: 2rem;
  text-align: center;
`;

const NavigationHeaders = styled.h2`
  font-size: 3rem;
`;
