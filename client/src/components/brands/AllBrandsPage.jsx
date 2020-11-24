import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IndividualBrand } from "./IndividualBrand";
import { Loading } from "../Loading";
// console.log(fetchBrands);
const AllBrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState("loading");
  // console.log(brands);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        let data = await fetch("/companies");
        data = await data.json();
        setBrands(data.companies);
        setStatus("idle");
      } catch (err) {
        console.log(err);
      }
    };
    fetchBrands();
  }, []);

  const sortedBrands = brands.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return +1;
    }
    return 0;
  });

  if (!brands || status === "loading") {
    return <Loading />;
  }

  return (
    <Wrapper>
      <MainWrapper>
        {sortedBrands.map((brand) => {
          return (
            <IndividualBrand key={brand._id} id={brand._id} brand={brand} />
          );
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

export default AllBrandsPage;
