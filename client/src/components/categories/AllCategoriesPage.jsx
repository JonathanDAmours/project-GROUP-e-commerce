import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IndividualCategory } from "./individualCategory";
import { Loading } from "../Loading";

const AllCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let data = await fetch("/categories");
        data = await data.json();
        setCategories(data.categories);
        setStatus("idle");
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  if (!categories || status === "loading") {
    return <Loading />;
  }

  return (
    <Wrapper>
      <MainWrapper>
        {categories.map((category) => {
          return <IndividualCategory key={category} category={category} />;
        })}
      </MainWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 40px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default AllCategoriesPage;
