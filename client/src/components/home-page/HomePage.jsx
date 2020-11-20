import React from "react";
import styled from "styled-components";

import { NavBar } from "../navbar/NavBar";
import Banner from "../../assets/homePageBanner.jpg";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ImgDiv>
        {/* Placeholder banner unless we like this one */}
        <BannerImg src={Banner} />
      </ImgDiv>
    </div>
  );
};

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerImg = styled.img`
  height: auto;
  width: 100%;
  z-index: 0;
`;
