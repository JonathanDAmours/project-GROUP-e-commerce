// items reducer
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

export const resetCart = () => ({
  type: "RESET_CART",
});

export const updateError = () => ({
  type: "UPDATE_ERROR",
});

//allBrandsReducer
export const requestAllBrands = () => ({
  type: "REQUEST_ALL_BRANDS",
});

export const responseAllBrands = (item) => ({
  type: "RESPONSE_ALL_BRANDS",
  item,
});

export const requestUpdateStock = () => ({
  type: "REQUEST_UPDATE_STOCK",
});

export const updatCartQuantity = (item) => ({
  type: "UPDATE_CART_QUANTITY",
  item,
});

export const updateStockConfirmed = (item) => ({
  type: "UPDATE_STOCK_CONFIRMED",
  item,
});

//paginationReducer
export const updatePagination = (payload) => ({
  type: "UPDATE_PAGINATION",
  payload,
});
