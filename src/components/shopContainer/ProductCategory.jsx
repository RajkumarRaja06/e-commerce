import SortProduct from './SortProduct';
import SingleProduct from '../product/SingleProduct';
import { useState } from 'react';
import { productData, shortDropdown } from '../../constants';

const ProductCategory = ({ newData }) => {
  const [data, setData] = useState(productData);

  const selectedValue = (e) => {
    const { value } = e.target;

    if (value === 'lowest price') {
      console.log(value);
      const lowestPrice = productData.sort((a, b) => b.price - a.price);
      console.log(lowestPrice);
      setData(lowestPrice);
    }

    if (value === 'highest price') {
      console.log(value);
      const highestPrice = productData.sort((a, b) => a.price + b.price);
      console.log(highestPrice);
      setData(highestPrice);
    }

    if (value === 'product name') {
      console.log(value);
      const productName = productData.sort((a, b) => a.name + b.name);
      console.log(productName);
      setData(productName);
    }

    if (value === 'default shorting') {
      console.log(productData);
      setData(productData);
    }
  };

  return (
    <div className='productCategory'>
      <SortProduct
        shortDropdown={shortDropdown}
        selectedValue={selectedValue}
      />
      <SingleProduct data={data} />
    </div>
  );
};

export default ProductCategory;
