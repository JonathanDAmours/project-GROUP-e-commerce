import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { HomePage } from "./home-page/HomePage";
import AllItemsPage from "./all-items/AllItemsPage";
import AllBrandsPage from "./brands/AllBrandsPage";
import AllCategoriesPage from "./categories/AllCategoriesPage";
import { NavBar } from "./navbar/NavBar";

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
            <Route exact path="/categories/:category">
              <AllCategoriesPage />
            </Route>
            <Route exact path="/items">
              <AllItemsPage />
            </Route>
            <Route>
              <AllBrandsPage exact path="/brands" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
