import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_DETAILS,
  SIGNOUT_USER,
  SIGN_IN_USER_FAIL,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  TOGGLETHEME,
  UPDATE_USER_BY_ID_FAIL,
  UPDATE_USER_BY_ID_REQUST,
  UPDATE_USER_BY_ID_RESET,
  UPDATE_USER_BY_ID_SUCCESS,
} from "../types";

const userReducers = (
  state = {
    loading: false,
    userInfo: null,
    isDark: true,
  },
  action
) => {
  switch (action.type) {
    case SIGN_IN_USER_REQUEST:
      return { loading: true };
    case SIGN_IN_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payLoad,
        ...state,
      };
    case SIGN_IN_USER_FAIL:
      return {
        loading: false,
        error: action.error,
        ...state,
      };
    case SIGNOUT_USER:
      localStorage.removeItem("userInfo");
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shippingDetails");
      return {
        ...state,
        loading: false,
        userInfo: null,
      };
    case TOGGLETHEME:
      return {
        ...state,
        isDark: action.payLoad,
      };

    default:
      return state;
  }
};
export const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { loading: true };
    case CREATE_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payLoad,
      };

    case CREATE_USER_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const userInfoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_BY_ID_REQUEST:
      return { loading: true };
    case GET_USER_BY_ID_SUCCESS:
      return { loading: false, userById: action.payLoad };
    case GET_USER_BY_ID_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export const updateUserInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_BY_ID_REQUST:
      return { loading: true, userNewInfo: {} };
    case UPDATE_USER_BY_ID_SUCCESS:
      return {
        loading: false,
        userNewInfo: action.payLoad,
      };
    case UPDATE_USER_BY_ID_FAIL:
      return { loading: false, error: action.error };
    case UPDATE_USER_BY_ID_RESET:
      return { loading: false, userNewInfo: {} };
    default:
      return state;
  }
};
export const userShippingDetailsReducer = (
  state = {
    shippingDetails: {},
  },
  action
) => {
  switch (action.type) {
    case SAVE_SHIPPING_DETAILS:
<<<<<<< HEAD
      return { loading: true, shipping: action.payLoad };
=======
      console.log(action.payLoad);
      return { loading: false, shipping: action.payLoad };
    case SIGNOUT_USER:
      return { shipping: null };
>>>>>>> master
    default:
      return state;
  }
};

export const userPaymentDetailsReducer = (
  state = {
    payment: "",
  },
  action
) => {
  switch (action.type) {
    case SAVE_PAYMENT_METHOD:
      return { payment: action.payLoad };
    case SIGNOUT_USER:
      return { payment: null };
    default:
      return state;
  }
};

export default userReducers;
