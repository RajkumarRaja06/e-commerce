import { createContext, useContext, useReducer } from 'react';

import shopReducer from '../utils/reducer/shopReducer';

import { productData } from '../constants';

const ShopContext = createContext();

const initialData = {
  products: productData,
};

const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialData);

  const selectedValue = (even) => {
    dispatch({ type: `${even.target.value}` });
  };

  const clickHandler = (name) => {
    dispatch({ type: `${name}` });
  };

  const filter = (e) => {
    dispatch({ type: 'filter', payload: { e: e } });
  };

  return (
    <ShopContext.Provider
      value={{ ...state, selectedValue, clickHandler, filter }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const ShopConsumer = () => {
  return useContext(ShopContext);
};

export { ShopContext, ShopProvider, ShopConsumer };
