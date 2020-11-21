const initialState = {
  allBrands: null,
  status: "loading",
  error: null,
};

export default function allBrandsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_BRANDS": {
      console.log(action);
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_ALL_BRANDS": {
      console.log(action);
      return {
        ...state,
        status: "idle",
        allBrands: action.brands,
        brands: action.brands,
      };
    }

    default: {
      return state;
    }
  }
}
