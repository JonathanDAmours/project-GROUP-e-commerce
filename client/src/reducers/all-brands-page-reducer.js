const initialState = {};

export default function allBrandsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_BRANDS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RESPONSE_ALL_BRANDS": {
      return {
        ...state,
        ...action.item,
        status: "idle",
      };
    }

    case "REQUEST_UPDATE_STOCK": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "UPDATE_CART_QUANTITY": {
      return {
        ...state,
        [action.item._id]: {
          ...action.item,
          quantity: [action.item._id].quantity,
        },
      };
    }

    case "UPDATE_STOCK_CONFIRMED": {
      const currentItem = state[action.item._id];
      return {
        ...state,
        currentItem: {
          ...action.item,
          numInStock: currentItem.numInStock - currentItem.quantity,
        },
      };
    }

    default: {
      return state;
    }
  }
}
