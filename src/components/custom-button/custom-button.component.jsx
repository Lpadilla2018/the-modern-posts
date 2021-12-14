import './custom-button.styles.scss';

const CustomButton = ({buttonText, handleOnClickFunction}) => {
  return (
    <div className='custom-button'>
      <button onClick={handleOnClickFunction ? handleOnClickFunction : null}>
        <p>{buttonText}</p>
      </button>
    </div>
  );
};

export default CustomButton;