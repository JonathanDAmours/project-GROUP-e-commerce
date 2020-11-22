import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IndividualBrand } from "./IndividualBrand";

// console.log(fetchBrands);
const AllBrandsPage = () => {
  const [brands, setBrands] = useState([]);

  console.log(brands);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        let data = await fetch("/companies");
        data = await data.json();
        setBrands(data.companies);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBrands();
  }, []);

  return (
    <Wrapper>
      <MainWrapper>
        {brands.map((brand) => {
          return <IndividualBrand key={brand._id} brand={brand} />;
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
