import '../../styles/cart/cartTotals.css';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { CartConsumer } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import { UserConsumer } from '../../context/userContext';
import { toast } from 'react-toastify';

const CartTotals = () => {
  const { accessToken } = UserConsumer();
  const { totalPrice, cart, checkOut } = CartConsumer();
  const navigate = useNavigate();

  const order = () => {
    checkOut();
    navigate('/');
  };

  const showMsg = () => {
    toast.warning('Please LogIn !');
  };
  return (
    <div className='cart-totals'>
      <h1>Cart totals</h1>
      <div className='total-container'>
        <h3>Total</h3>
        <p>${`${totalPrice.toFixed(2)}`}</p>
      </div>
      {cart.length > 0 && (
        <div className='checkout-btn' onClick={accessToken ? order : showMsg}>
          <button type='button'>
            <span className='checkout-btn-logo'>
              <MdShoppingCartCheckout />
            </span>
            proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartTotals;
