import { buttonCategories } from '../../constants';

const ButtonContainer = () => {
  return (
    <div className='buttonContainer'>
      <h1>New Arrivals</h1>
      <div className='btn-categories'>
        {buttonCategories.map((button) => (
          <button type='button'>{button}</button>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
