import { ADD_TO_CART, DELETE_ITEM, EMPTYCART, SIGNOUT_USER } from "../types";

const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItem = action.payLoad;

      const exist = state.cartItems.find((x) => x.product === cartItem.product);

      if (exist) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === exist.product ? cartItem : x
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, cartItem] };
      }

    case DELETE_ITEM:
      return { cartItems: action.payLoad.cartItems };
    case SIGNOUT_USER:
      return { cartItems: [] };

    default:
      return state;
  }
};

export default cartReducers;
