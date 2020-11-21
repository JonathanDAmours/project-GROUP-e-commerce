export const addToCart = (item) => ({
  type: "ADD_ITEM",
  item,
});

// Brands:
//get all brands data
export const receiveAllBrands = (brands) => {
  return {
    type: "RECEIVE_ALL_BRANDS",
    brands,
  };
};
