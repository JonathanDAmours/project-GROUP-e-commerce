import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IndividualBrand } from "./IndividualBrand";

// console.log(fetchBrands);
const AllBrandsPage = () => {
  const [brands, setBrands] = useState([]);

  // console.log(brands);
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

  const sortedBrands = brands.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return +1;
    }
    return 0;
  });

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
