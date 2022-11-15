import {TYPES} from "../actions/cartActions.js";

export const cartInitialState = {
  cart:[]
}

export function cartReducer(state, action){
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return {contador: state.contador + 1}      
    case TYPES.REMOVE_FROM_CART:
      return {contador: state.contador - 1}
    default:
      return state;
  }
}