import '../../styles/product/singleProduct.css';
import { TiHeartOutline } from 'react-icons/ti';
import { AiOutlineEye } from 'react-icons/ai';
import { TbShoppingCart } from 'react-icons/tb';
import { CartConsumer } from '../../context/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = ({ data }) => {
  const { increasedItem } = CartConsumer();

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
              <button onClick={() => increasedItem(id)}>
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
      <ToastContainer />
    </div>
  );
};

export default SingleProduct;
