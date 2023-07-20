import '../../styles/product/singleProduct.css';
import img from '../../../public/assets/singleProduct1.webp';
import { TiHeartOutline } from 'react-icons/ti';
import { AiOutlineEye } from 'react-icons/ai';
import { TbShoppingCart } from 'react-icons/tb';

const SingleProduct = () => {
  return (
    <div className='singleProduct'>
      <div className='product-img'>
        <img src={img} alt='Image' />
        <div className='singleProduct-icon'>
          <span className='heart-icon'>
            <TiHeartOutline />
          </span>
          <span className='eye-icon'>
            <AiOutlineEye />
          </span>
          <span className='singleProduct-cart-icon'>
            <TbShoppingCart />
          </span>
        </div>
      </div>
      <div className='product-data'>
        <div>Fujifilm X100T 16 MP Digital Camera (Silver)</div>
        <p>$55555</p>
      </div>
    </div>
  );
};

export default SingleProduct;
