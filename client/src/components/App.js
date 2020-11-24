import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import { HomePage } from "./home-page/HomePage";
import AllItemsPage from "./all-items/AllItemsPage";
import AllBrandsPage from "./brands/AllBrandsPage";
import AllCategoriesPage from "./categories/AllCategoriesPage";
import { NavBar } from "./navbar/NavBar";
import PaymentConf from "./Cart/PaymentConf";
import { ItemsByBrand } from "./brands/ItemsByBrand";
import { ItemsByCategory } from "./categories/ItemsByCategory";
import { Footer } from "../footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Wrapper>
          <NavBar />
          <Content>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/categories">
                <AllCategoriesPage />
              </Route>
              <Route exact path="/categories/:categoryName">
                <ItemsByCategory />
              </Route>

              <Route exact path="/items">
                <AllItemsPage />
              </Route>
              <Route exact path="/brands">
                <AllBrandsPage />
              </Route>
              <Route exact path="/items/brands/:id">
                <ItemsByBrand />
              </Route>
            </Switch>
          </Content>
          <FooterDiv>
            <Footer />
          </FooterDiv>
        </Wrapper>
      </Router>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 4rem;
`;

export default App;
