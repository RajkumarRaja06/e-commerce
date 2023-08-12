import SortProduct from './SortProduct';
import SingleProduct from '../product/SingleProduct';
import { shortDropdown } from '../../constants';
import { ShopConsumer } from '../../context/shopContext';
import { LuSearch } from 'react-icons/lu';

const ProductCategory = () => {
  const { products, filter } = ShopConsumer();

  return (
    <div className='productCategory'>
      <SortProduct shortDropdown={shortDropdown} />
      <div className='nav-search-container'>
        <span className='nav-search-icon'>
          <LuSearch />
        </span>
        <input
          type='search'
          className='nav-search-input'
          placeholder='Type for search'
          onChange={(e) => filter(e)}
        />
      </div>
      <SingleProduct data={products} />
    </div>
  );
};

export default ProductCategory;
