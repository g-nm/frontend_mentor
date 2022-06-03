import { createContext, useReducer } from 'react';
import { cartReducer } from '../Reducers/reducer';

export const CartContext = createContext([]);
export const CartDispatchContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={cartItems}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export default ContextProvider;
