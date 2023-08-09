import { productData } from '../../constants';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'REMOVE_ITEM':
      const filteredItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filteredItems };

    case 'INCREASED_ITEM':
      const productToAdd = productData.find(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.cart.find(
        (item) => item.id === productToAdd.id
      );

      if (existingItem) {
        const updatedCart = state.cart.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { ...state, cart: updatedCart };
      } else {
        console.log(state.cart);
        //return new array with modifies cartItems / new cart item
        const updatedCart = [...state.cart, { ...productToAdd, quantity: 1 }];
        return { ...state, cart: updatedCart };
      }

    case 'DECREASED_ITEM':
      const decreasedItem = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        })
        .filter((item) => item.quantity > 0);
      return { ...state, cart: decreasedItem };

    case 'UPDATED_TOTALS':
      const updateTotals = state.cart.reduce((pre, curr) => {
        return pre + curr.quantity;
      }, 0);
      const updatePrice = state.cart.reduce((pre, curr) => {
        const amount = curr.quantity * curr.price;
        return pre + amount;
      }, 0);
      return { ...state, totalQuantity: updateTotals, totalPrice: updatePrice };
    default:
      return state;
  }
};

export { cartReducer };
