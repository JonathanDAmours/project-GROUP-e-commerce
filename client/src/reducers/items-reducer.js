const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const currentItem = state[action.item._id];
      return {
        ...state,
        [action.item._id]: {
          ...action.item,
          quantity: currentItem ? currentItem.quantity + 1 : 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item._id];
      return stateCopy;
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item._id]: {
          ...state[action.item._id],
          quantity: action.item.quantity,
        },
      };
    }
    case "RESET_CART": {
      return {
        initialState,
      };
    }
    case "UPDATE_ERROR": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}

export const getStoreItemArray = (state) => {
  const storeItems = Object.values(state);
  console.log(storeItems);
  return storeItems;
};
