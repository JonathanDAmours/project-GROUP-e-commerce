import React from "react";
import styled from "styled-components";

import { NavBar } from "../navbar/NavBar";
import Banner from "../../assets/homePageBanner.jpg";
import { Categories } from "../../categories/Categories";

export const HomePage = () => {
  return (
    <Wrapper>
      <NavBar />
      <ImgDiv>
        {/* Placeholder banner unless we like this one */}
        <BannerImg src={Banner} />
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

const Wrapper = styled.div`
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
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
