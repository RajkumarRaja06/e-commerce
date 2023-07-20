import '../../styles/product/product.css';
import ProductHeader from './ProductHeader';
import ButtonContainer from './ButtonContainer';
import SingleProduct from './SingleProduct';

const Product = () => {
  return (
    <div className='product'>
      <ProductHeader />
      <ButtonContainer />
      <SingleProduct />
    </div>
  );
};

export default Product;
