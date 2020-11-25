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
  const [items, setItems] = useState([]);
  //limit is the amount of items per page right now we don't need a state but if ever we want the user to control the number of items per page it wil be necessary
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);
  const [status, setStatus] = useState("loading");

  //handlers
  const fetchItems = async (limit, offset) => {
    try {
      let data = await fetch(`/items?limit=${limit}&skip=${offset}`);
      data = await data.json();
      let items = data.data;
      setItems(items);
      setStatus("idle");
      // let reducerData = await fetch("/items");
      // reducerData = await reducerData.json();
      // let reducerItems = reducerData.data;
      // dispatch(responseAllBrands(reducerItems));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Router>
        <GlobalStyles />
        <Wrapper>
          <NavBar
            fetchItems={() => {
              fetchItems(limit, offset);
            }}
            setOffset={setOffset}
            offset={offset}
            limit={limit}
            items={items}
            status={status}
          />
          <FooterDiv>
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
                  <AllItemsPage
                    fetchItems={() => {
                      fetchItems(limit, offset);
                    }}
                    setOffset={setOffset}
                    offset={offset}
                    limit={limit}
                    items={items}
                    status={status}
                  />
                </Route>
                <Route exact path="/brands">
                  <AllBrandsPage />
                </Route>
                <Route exact path="/items/brands/:id">
                  <ItemsByBrand />
                </Route>
              </Switch>
            </Content>
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
  margin-bottom: 80px;
`;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default App;
