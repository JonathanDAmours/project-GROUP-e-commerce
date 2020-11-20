import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { NavContent } from "./NavContent";
import DispatchLogo from "../../assets/Dispatch_Logo.png";

export const NavBar = () => {

    /// CONDITIONAL RENDERING FOR IPAD-MOBILE
    const useViewport = () => {
      const [width, setWidth] = useState(window.innerWidth);
      const [height, setHeight] = useState(window.innerHeight);
      useEffect(() => {
        const handleWindowResize = () => {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
        }
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
      return { width, height };
    }
    const { width } = useViewport();
    const mobilebreakpoint = 768;

    // {width > mobilebreakpoint ? <div></div> : <div></div>}
    ////

  return (
    <Bar>
      {width > mobilebreakpoint ?  
      <Logo>
        <LogoImg src={DispatchLogo} alt="Dispatch logo" />
      </Logo>: <div>hello</div>}
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
  padding: 0 40px 0 40px;
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
