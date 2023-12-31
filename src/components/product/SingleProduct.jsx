import '../../styles/product/singleProduct.css';
import { TiHeartOutline } from 'react-icons/ti';
import { AiOutlineEye } from 'react-icons/ai';
import { TbShoppingCart } from 'react-icons/tb';
import { CartConsumer } from '../../context/cartContext';
import { toast } from 'react-toastify';
import { UserConsumer } from '../../context/userContext';

const SingleProduct = ({ data }) => {
  const { increasedItem } = CartConsumer();
  const { accessToken } = UserConsumer();

  const showMsg = () => {
    toast.warning('Please LogIn !');
  };

  return (
    <div className='product-container'>
      {data.map((item, index) => {
        const { name, img, price, id } = item;
        return (
          <div className='singleProduct' key={id}>
            <div className='product-img'>
              <img src={img} alt={name} />
            </div>

            <div className='product-data'>
              <div>{name}</div>
              <p>${price}</p>
            </div>

            <div className='singleProduct-addCart-btn'>
              <button onClick={accessToken ? () => increasedItem(id) : showMsg}>
                <span className='singleProduct-cart-icon'>
                  <TbShoppingCart />
                </span>
                <span className='singleProduct-addCart-btn-name'>
                  Add to Cart
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
