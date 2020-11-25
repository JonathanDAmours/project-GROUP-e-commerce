import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavContent } from "./NavContent";
import { BurgerContent } from "./BurgerContent";
import DispatchLogo from "../../assets/Dispatch_Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = ({
  fetchItems,
  setOffset,
  offset,
  limit,
  items,
  status,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  /// CONDITIONAL RENDERING FOR IPAD-MOBILE
  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width, height };
  };
  const { width } = useViewport();
  const mobilebreakpoint = 600;

  // {width > mobilebreakpoint ? <div></div> : <div></div>}
  ////

  return (
    <>
      <Bar>
        <Logo to="/" tabIndex="0" aria-label="Home">
          <LogoImg src={DispatchLogo} alt="Dispatch logo" />
        </Logo>
        <ContentDiv>
          <NavContentDiv>
            {width > mobilebreakpoint ? (
              <NavContent
                fetchItems={() => {
                  fetchItems(limit, offset);
                }}
                setOffset={setOffset}
                offset={offset}
                limit={limit}
                items={items}
                status={status}
              />
            ) : (
              <StyledGiHamburgerMenu onClick={handleToggle} />
            )}
          </NavContentDiv>
        </ContentDiv>
      </Bar>
      {toggle === true ? (
        <DropDownDiv>
          <BurgerContent
            fetchItems={() => {
              fetchItems(limit, offset);
            }}
            setOffset={setOffset}
            offset={offset}
            limit={limit}
            items={items}
            status={status}
          />
        </DropDownDiv>
      ) : null}
    </>
  );
};

const DropDownDiv = styled.div`
  background-color: white;
  position: absolute;
  text-align: center;
  width: 100vw;
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
`;

const NavContentDiv = styled.div`
  display: flex;
  position: relative;
`;

const Logo = styled(NavLink)`
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;

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
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.33);
  z-index: 1000;

  // for media, put menu in a hamburglar?
`;

//div for NavContent compontent
const ContentDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const LogoImg = styled.img`
  height: 4rem;
  width: 125px;
  height: auto;
`;
