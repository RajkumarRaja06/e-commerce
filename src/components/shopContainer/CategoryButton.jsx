import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { ShopConsumer } from '../../context/shopContext';

const CategoryButton = ({ categories }) => {
  const { clickHandler } = ShopConsumer();
  return (
    <div className='CategoryButton'>
      <h1>Product Category</h1>
      <div className='shop-btn-categories'>
        {categories.map((name, index) => (
          <button type='button' key={index} onClick={() => clickHandler(name)}>
            <MdOutlineKeyboardDoubleArrowRight className='shop-btn-icon' />
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryButton;
