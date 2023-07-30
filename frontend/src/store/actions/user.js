import axios from "axios";

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  PROFILE_USER_DETAILS_REQUEST,
  PROFILE_USER_DETAILS_SUCCESS,
  PROFILE_USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/user";

export const register =
  ({ user, avatar }) =>
  async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/user/register`,
        { user, avatar },
        config
      );
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/user/login`, user, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    await axios.get(`/api/v1/user/logout`, config);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: CLEAR_ERRORS });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get(`/api/v1/user/me`, config);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      // payload: error.response.data.message,
    });
  }
};

export const getProfileUser = (username) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_USER_DETAILS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    console.log(username);
    const { data } = await axios.get(
      `/api/v1/user/profileUser/${username}`,
      config
    );
    console.log(data);
    dispatch({
      type: PROFILE_USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_USER_DETAILS_FAIL,
      payload: error.response.statusText,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
