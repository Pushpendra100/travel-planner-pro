import axios from "axios";

import {
  GET_ALL_DESTINS_REQUEST,
  GET_ALL_DESTINS_SUCCESS,
  GET_ALL_DESTINS_FAIL,
  CLEAR_ERRORS,
} from "../constants/destin";

export const getAllDestins = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DESTINS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get(`/api/v1/destin/getAllDestins`, config);

    dispatch({
      type: GET_ALL_DESTINS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_DESTINS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
