import '../../styles/cart/cartMobile.css';

import { CiSquareRemove } from 'react-icons/ci';
import { HiPlus, HiMinus } from 'react-icons/hi';

import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';
import { CartConsumer } from '../../context/cartContext';
import { UserConsumer } from '../../context/userContext';
import { toast } from 'react-toastify';

const MobileComponent = () => {
  const { cart, removeItem, increasedItem, decreasedItem } = CartConsumer();
  const { accessToken } = UserConsumer();

  const showMsg = () => {
    toast.warning('Please LogIn !');
  };
  return (
    <div className='mobile-cart'>
      {cart.map((item) => {
        const { name, img, quantity, price, id } = item;
        return (
          <div className='cart' key={id}>
            <div className='cart-img-container'>
              <img src={img} alt={name} />
            </div>
            <div className='cart-data-container'>
              <div className='cart-table-row'>
                <h5 className='cart-product-name'>{name}</h5>
                <button
                  type='button'
                  className='cart-remove-btn'
                  onClick={() => removeItem(id)}
                >
                  <CiSquareRemove />
                </button>
              </div>
              <div className='cart-table-row'>
                <h5 className='cart-heading-name'>Price</h5>
                <p className='cart-product-price'>${price}</p>
              </div>
              <div className='cart-table-row'>
                <h5 className='cart-heading-name'>Quantity</h5>
                <div className='cart-quantity-container'>
                  <div className='cart-quantity'>{quantity}</div>
                  <div className='cart-quantity-btn'>
                    <button
                      type='button'
                      className='cart-quantity-plus-btn'
                      onClick={accessToken ? () => increasedItem(id) : showMsg}
                    >
                      <HiPlus />
                    </button>
                    <button
                      type='button'
                      className='cart-quantity-minus-btn'
                      onClick={accessToken ? () => decreasedItem(id) : showMsg}
                    >
                      <HiMinus />
                    </button>
                  </div>
                </div>
              </div>
              <div className='cart-table-row'>
                <h5 className='cart-heading-name'>Subtotal</h5>
                <p className='cart-subtotal-price'>${price * quantity}</p>
              </div>
            </div>
          </div>
        );
      })}
      {cart.length > 0 && <EmptyCart />}
      <CartTotals />
    </div>
  );
};

export default MobileComponent;
