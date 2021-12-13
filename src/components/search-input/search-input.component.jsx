import './search-input.styles.scss';

/**
 *
 * @param object Takes input values placeholder and handleChangeFunction
 * Displays an input box with the passed in placeholder
 * When input changes invoke the passed in handleChangeFunction
 */
const SearchInput = ({ placeholder, handleChangeFunction }) => (
  <div className='search-input'>
    <input placeholder={placeholder} onChange={handleChangeFunction}></input>
  </div>
);

export default SearchInput;
