export const addToCart = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateQuantity = (item) => ({
  type: "UPDATE_QUANTITY",
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
