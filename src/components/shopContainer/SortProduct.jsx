import '../../styles/shop.css';
import { ShopConsumer } from '../../context/shopContext';

const SortProduct = ({ shortDropdown }) => {
  const { selectedValue } = ShopConsumer();
  return (
    <select className='shotProduct' onChange={selectedValue}>
      {shortDropdown.map((name, index) => {
        return (
          <option key={index} value={name}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default SortProduct;
