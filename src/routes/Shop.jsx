import CategoryButton from '../components/shopContainer/CategoryButton';
import ProductCategory from '../components/shopContainer/ProductCategory';
import { productData } from '../constants';
import { removeDuplicate } from '../utils/product';
import '../styles/shop.css';

const Shop = () => {
  const buttonCategories = [
    'collection',
    ...removeDuplicate(productData.map((item) => item.categories)),
  ];

  return (
    <div className='shop'>
      <CategoryButton categories={buttonCategories} />
      <ProductCategory />
    </div>
  );
};

export default Shop;
