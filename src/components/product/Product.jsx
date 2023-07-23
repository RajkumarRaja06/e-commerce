import '../../styles/product/product.css';
import ProductHeader from './ProductHeader';
import ButtonContainer from './ButtonContainer';
import SingleProduct from './SingleProduct';
import { useState } from 'react';
import { productData, productHeader } from '../../constants';

const Product = () => {
  const [data, setData] = useState(productData);

  // let randomData = [];
  // const randomNumberInRange = () => {
  //   for (let i = 0; i < 15; i++) {
  //     const randomNumber = Math.floor(Math.random() * 39);
  //     randomData.push(data[randomNumber]);
  //   }
  //   // setData(randomData);
  // };
  // randomNumberInRange();

  const buttonCategories = ['all', "men's", "women's", 'accessories'];

  const filteredData = (name) => {
    if (name === 'all') {
      setData(productData);
    } else {
      const filteredArray = productData.filter((item) => {
        return item.categories === name;
      });
      setData(filteredArray);
    }
  };

  return (
    <div className='product'>
      <ProductHeader productHeader={productHeader} />
      <ButtonContainer
        categories={buttonCategories}
        filteredData={filteredData}
      />
      <SingleProduct data={data} />
    </div>
  );
};

export default Product;
