import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// import { fetchBrands } from "../../helpers/fetch";

// import { receiveAllBrands, requestAllBrands } from "../../actions";

// const fetchBrands = async () => {
//   try {
//     let data = await fetch("/companies");
//     data = await data.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(fetchBrands);
const AllBrandsPage = () => {
  //   const dispatch = useDispatch();

  //   const state = useSelector((state) => state);
  //   console.log(state);

  //   dispatch(requestAllBrands());
  //   fetch("/companies")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       dispatch(receiveAllBrands());
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  return <div>All brands ...</div>;
};
export default AllBrandsPage;
