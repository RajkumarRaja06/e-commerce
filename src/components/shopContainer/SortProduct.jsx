import '../../styles/shop.css';

const SortProduct = ({ shortDropdown, selectedValue }) => {
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
