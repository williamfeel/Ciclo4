import {TYPES} from "../actions/cartActions.js";
import {useReducer, createContext} from "react"


export const cartReducers = createContext()

// el esatdo inicial de nuestro carro
const initialState = {
  cart:{
    cartItems:[]
  }
}

// funcion reductora donde crea la logica funcional
function reducer(state, action){
}

// funcion para crear cartReducers  y envolver a los componentes hijos
export function ReducerProvider(){
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  return <ReducerProvider value={value}></ReducerProvider>
}


export function cartReducer(state, action){
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
        let comproProducto = state.articulos.find(articulo => articulo.id === action.payload);
        return {
          ...state,
          cart:[...state.cart, comproProducto],
        }
      }      
    case TYPES.REMOVE_FROM_CART:
      return {contador: state.contador - 1}
    default:
      return state;
  }
}

