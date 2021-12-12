import { combineReducers } from "redux";
import shop from "./shop.reducer";
import { brandFilterReducer } from "./brand.filter.reducer";
import { paginationReducer } from "./pagination.reducer";

export default combineReducers({
  shop,
  brandFilter: brandFilterReducer,
  pagination: paginationReducer,
});
