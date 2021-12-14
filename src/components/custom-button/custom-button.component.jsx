import './custom-button.styles.scss';

/**
 * @param object Takes input values buttonText and handleOnClickFunction
 * Displays buttonText for button and uses passed in handleOnClickFunction for onClick events
 * @returns
 */
const CustomButton = ({ buttonText, handleOnClickFunction }) => {
  return (
    <div className='custom-button'>
      <button onClick={handleOnClickFunction ? handleOnClickFunction : null}>
        <p>{buttonText}</p>
      </button>
    </div>
  );
};

export default CustomButton;
