import SortProduct from './SortProduct';
import SingleProduct from '../product/SingleProduct';
import { shortDropdown } from '../../constants';
import { ShopConsumer } from '../../context/shopContext';

const ProductCategory = () => {
  const { products } = ShopConsumer();

  return (
    <div className='productCategory'>
      <SortProduct shortDropdown={shortDropdown} />
      <SingleProduct data={products} />
    </div>
  );
};

export default ProductCategory;
