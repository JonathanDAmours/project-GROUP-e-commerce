import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IndividualBrand } from "./IndividualBrand";

// import { receiveAllBrands, requestAllBrands } from "../../actions";

// console.log(fetchBrands);
const AllBrandsPage = () => {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      let data = await fetch("/companies");
      data = await data.json();
      console.log(data);
      setBrands(data.companies);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(brands);
  useEffect(() => {
    fetchBrands();
  }, []);

  return brands.map((brand) => {
    return <IndividualBrand key={brand._id} brand={brand} />;
    //<IndividualBrand />
  });
};

export default AllBrandsPage;
