import { SearchForm, InputLabel, TextInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { filterContactsValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => dispatch(filterContactsValue(e.target.value));

  return (
    <SearchForm>
      <InputLabel htmlFor={nanoid()}>
        <TextInput
          id={nanoid()}
          onChange={handleFilter}
          type="text"
          name="filter"
          placeholder="find contacts by name"
          autoComplete="off"
          required
        />
      </InputLabel>
    </SearchForm>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };
