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
      };
    }

    default: {
      return state;
    }
  }
}
