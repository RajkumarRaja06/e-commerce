import { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer } from '../utils/reducer/cartReducer';
import data from '../constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

const initialData = {
  cart: data,
  totalQuantity: 0,
  totalPrice: 0,
  subTotal: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialData);
  useEffect(() => {
    dispatch({ type: 'UPDATED_TOTALS' });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Successfully Clear Cart');
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: id } });
    toast.success('Successfully Item Removed');
  };

  const increasedItem = (id) => {
    dispatch({ type: 'INCREASED_ITEM', payload: { id: id } });
    toast.success('Successfully Add to Cart');
  };

  const decreasedItem = (id) => {
    dispatch({ type: 'DECREASED_ITEM', payload: { id: id } });
    toast.success('Successfully Item Decreased');
  };

  const checkOut = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Your Order Is Placed');
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increasedItem,
        decreasedItem,
        checkOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const CartConsumer = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, CartConsumer };
