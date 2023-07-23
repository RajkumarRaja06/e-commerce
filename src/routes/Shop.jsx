import CategoryButton from '../components/shopContainer/CategoryButton';
import ProductCategory from '../components/shopContainer/ProductCategory';
import { useState } from 'react';
import { productData } from '../constants';
import { removeDuplicate } from '../utils/product';
import '../styles/shop.css';

const Shop = () => {
  const [data, setData] = useState(productData);

  const buttonCategories = [
    'collection',
    ...removeDuplicate(productData.map((item) => item.categories)),
  ];

  const filteredData = (name) => {
    if (name === 'collection') {
      setData(productData);
    } else {
      const filteredArray = productData.filter((item) => {
        return item.categories === name;
      });
      setData(filteredArray);
    }
  };
  return (
    <div className='shop'>
      <CategoryButton
        categories={buttonCategories}
        filteredData={filteredData}
      />
      <ProductCategory data={data} />
    </div>
  );
};

export default Shop;
