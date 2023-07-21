import '../../styles/product/singleProduct.css';
import { TiHeartOutline } from 'react-icons/ti';
import { AiOutlineEye } from 'react-icons/ai';
import { TbShoppingCart } from 'react-icons/tb';

const SingleProduct = ({ data }) => {
  return (
    <div className='product-container'>
      {data.map((item, index) => {
        const { name, img, price } = item;
        return (
          <div className='singleProduct' key={index}>
            <div className='product-img'>
              <img src={img} alt={name} />
              <span className='heart-icon'>
                <TiHeartOutline />
              </span>
            </div>

            <span className='eye-icon'>
              <AiOutlineEye />
            </span>

            <div className='product-data'>
              <div>{name}</div>
              <p>${price}</p>
            </div>

            <div className='singleProduct-addCart-btn'>
              <button>
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
