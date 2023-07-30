import {
  GET_ALL_DESTINS_REQUEST,
  GET_ALL_DESTINS_SUCCESS,
  GET_ALL_DESTINS_FAIL,
  GET_DESTIN_REQUEST,
  GET_DESTIN_SUCCESS,
  GET_DESTIN_FAIL,
  CLEAR_ERRORS,
} from "../constants/destin";

export const destinReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_DESTINS_REQUEST:
    case GET_DESTIN_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_DESTINS_SUCCESS:
    case GET_DESTIN_SUCCESS:
      return {
        ...state,
        loading: false,
        destin: action.payload,
      };
    case GET_ALL_DESTINS_FAIL:
    case GET_DESTIN_FAIL:
      return {
        ...state,
        loading: false,
        destin: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
