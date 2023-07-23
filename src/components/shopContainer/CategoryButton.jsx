import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
const CategoryButton = ({ categories, filteredData }) => {
  const clickHandler = (name) => {
    filteredData(name);
  };
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
