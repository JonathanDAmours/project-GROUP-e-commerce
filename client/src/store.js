import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/items-reducer";
import brandReducer from "./reducers/all-brands-page-reducer";
import paginationReducer from "./reducers/pagination-reducer";

const reducer = combineReducers({
  cartReducer,
  brandReducer,
  paginationReducer,
});

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
