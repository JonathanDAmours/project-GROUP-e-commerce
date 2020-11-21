const initialState = {};

export default function allBrandsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_BRANDS": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
