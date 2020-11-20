import React from "react";
import styled from "styled-components";

import Banner from "../../assets/homePageBanner.jpg";

export const HomePage = () => {
  return (
    <div>
      <div>This is home!</div>
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
  width: 95vw;
  z-index: 0;
`;
