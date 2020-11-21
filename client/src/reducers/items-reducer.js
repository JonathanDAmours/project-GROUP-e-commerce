const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item._id]: {
          ...action.item,
          quantity: state[action.item._id]
            ? state[action.item._id].quantity + 1
            : 1,
        },
      };
    }
    default: {
      return state;
    }
  }
}
