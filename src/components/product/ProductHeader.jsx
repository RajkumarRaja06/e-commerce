import { productHeader } from '../../constants';

const ProductHeader = () => {
  return (
    <div className='product-header-container'>
      {productHeader.map(({ name, img }) => {
        return (
          <div
            className='product-header'
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductHeader;
