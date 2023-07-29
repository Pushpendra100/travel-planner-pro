import {
  GET_ALL_DESTINS_REQUEST,
  GET_ALL_DESTINS_SUCCESS,
  GET_ALL_DESTINS_FAIL,
  CLEAR_ERRORS,
} from "../constants/destin";

export const destinReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_DESTINS_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_DESTINS_SUCCESS:
      return {
        ...state,
        loading: false,
        destin: action.payload,
      };
    case GET_ALL_DESTINS_FAIL:
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
