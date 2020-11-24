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
        <div>
          <NavBar />
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
          <FooterDiv>
            <Footer />
          </FooterDiv>
        </div>
      </Router>
    </>
  );
};
const FooterDiv = styled.div`
  position: relative;
  margin-top: 40px;
`;

export default App;
