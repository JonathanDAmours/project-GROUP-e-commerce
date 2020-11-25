const initialState = { limit: 50, offset: 0 };

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PAGINATION": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const getPagination = (state) => state.paginationReducer;
