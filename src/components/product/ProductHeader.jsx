import { Link } from 'react-router-dom';
import { ShopConsumer } from '../../context/shopContext';

const ProductHeader = ({ productHeader }) => {
  const { clickHandler } = ShopConsumer();

  return (
    <div className='product-header-container'>
      {productHeader.map(({ name, img, category }, index) => {
        return (
          <div
            key={index}
            className='product-header'
            style={{
              backgroundImage: `url(${img})`,
            }}
            onClick={() => clickHandler(category)}
          >
            <Link to='/shop'>
              <div>{name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductHeader;
