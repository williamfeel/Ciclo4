import { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* const initialState = {
    cart: {
      cartItems: []
    }
  }
  
  function reducer(state, action){
    
    switch (action.type){
      case "AGREGAR_AL_CARRO":{
        const newItem = action.payload
        const existItem = state.cart.cartItems.find(item=>item._id===newItem._id)

        const cartItems = existItem ? state.cart.cartItems.map(item=>item._id===existItem._id ? newItem:item) : [...state.cart.cartItems, newItem]
        
        return {...state, cart:{...state.cart, cartItems}}
      }
      default: return state;
    }

  } */

  const agregarAlCarro = (pto) => {
    const existePto = cart.find((element) => element._id === pto._id);

    const cantidad = existePto ? parseInt(existePto.cantidad) + 1 : 1;
  
    pto["cantidad"] = cantidad;

    const nuevoCart = existePto
      ? cart.map((element) => (element._id === pto._id ? pto : element))
      : [...cart, pto];

    setCart(nuevoCart);
  };

  const eliminarDelCarro = (pto) => {
    setCart(cart.filter((element) => element._id !== pto._id));
  };


  const modificarCantidad = (pto, cant) => {  
    pto["cantidad"] = cant
    const existePto = cart.find((element) => element._id === pto._id);
    const nuevoCart = existePto
      ? cart.map((element) => (element._id === pto._id ? pto : element)):[]
    setCart(nuevoCart)
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarro,
        eliminarDelCarro,
        modificarCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;
