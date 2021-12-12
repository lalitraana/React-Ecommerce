import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  ADD_BRAND_TO_FILTER,
  REMOVE_BRAND_FROM_FILTER,
  ORDER_BY_ASC,
  ORDER_BY_DESC,
  CLEAR_ORDER_BY_PRICE,
  PREV_PAGE,
  NEXT_PAGE,
  GO_PAGE,
  COUNT_ITEM,
  LOADING_FALSE,
  LOADING_TRUE,
  PRODUCT_LIST_SUCCESS,
} from "./actionTypes";
import axios from "axios";
import { GET_PRODUCTS } from "./../utilities/urls";
export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const removeProductToCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};

export const incrementCartQuantity = (productId) => {
  return {
    type: INCREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const decrementCartQuantity = (productId) => {
  return {
    type: DECREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const addBrandToFilter = (brand) => {
  return {
    type: ADD_BRAND_TO_FILTER,
    brand,
  };
};

export const removeBrandFromFilter = (brand) => {
  return {
    type: REMOVE_BRAND_FROM_FILTER,
    brand,
  };
};

export const orderByAsc = () => {
  return {
    type: ORDER_BY_ASC,
  };
};

export const orderByDesc = () => {
  return {
    type: ORDER_BY_DESC,
  };
};

export const clearOrderBy = () => {
  return {
    type: CLEAR_ORDER_BY_PRICE,
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const goPage = (n) => {
  return {
    type: GO_PAGE,
    currentPage: n,
  };
};

export const countItem = (n) => {
  return {
    type: COUNT_ITEM,
    totalItemsCount: n,
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_TRUE,
      });
      let response = await axios.get(GET_PRODUCTS);
      const { statusText, data, status } = response;
      if (status === 200) {
        dispatch({
          type: LOADING_FALSE,
        });
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } else {
        dispatch({
          type: LOADING_FALSE,
        });
        console.log(statusText);
      }
    } catch (error) {
      console.log("error", error.message);
      dispatch({
        type: LOADING_FALSE,
      });
    }
  };
};
