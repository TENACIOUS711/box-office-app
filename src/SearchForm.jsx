import { useState } from 'react';
import { useSearchStr } from './useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ OnSearch }) => {
  const [searchStr, SetSearchStr] = useSearchStr('');
  const [searchOption, SetSearchOption] = useState('shows');
  const OnSearchInputChange = ev => {
    SetSearchStr(ev.target.value);
  };

  const OnRadioChange = ev => {
    SetSearchOption(ev.target.value);
  };

  const OnSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };
    OnSearch(options);
  };
  return (
    <div>
      <form onSubmit={OnSubmit}>
        <input type="text" value={searchStr} onChange={OnSearchInputChange} />

        <CustomRadio
          label="Shows"
          name="search_option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={OnRadioChange}
        />

        <CustomRadio
          label="Actors"
          name="search_option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={OnRadioChange}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchForm;
