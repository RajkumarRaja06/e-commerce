import { Link } from 'react-router-dom';

const ProductHeader = ({ productHeader }) => {
  return (
    <div className='product-header-container'>
      {productHeader.map(({ name, img, to }, index) => {
        return (
          <div
            key={index}
            className='product-header'
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <Link to='shop'>
              <div>{name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductHeader;
