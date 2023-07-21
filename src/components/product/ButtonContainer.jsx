const ButtonContainer = ({ categories, filteredData }) => {
  const clickHandler = (name) => {
    filteredData(name);
  };
  return (
    <div className='buttonContainer'>
      <h1>New Arrivals</h1>
      <div className='btn-categories'>
        {categories.map((name, index) => (
          <button type='button' key={index} onClick={() => clickHandler(name)}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
