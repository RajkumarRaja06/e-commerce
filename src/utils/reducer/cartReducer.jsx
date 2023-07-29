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
      const newCartItems = productData.filter(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cart.find(
        (item) => item.id === newCartItems[0].id
      );
      if (!existingItem) {
        state.cart.push({
          id: newCartItems[0].id,
          quantity: newCartItems[0].quantity + 1,
          name: newCartItems[0].name,
          price: newCartItems[0].price,
          img: newCartItems[0].img,
        });
      } else {
        existingItem.quantity++;
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
