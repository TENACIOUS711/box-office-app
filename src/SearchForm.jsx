import { useState } from 'react';

const SearchForm = ({ OnSearch }) => {
  const [searchStr, SetSearchStr] = useState('');
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
        <label>
          Shows
          <input
            type="radio"
            name="search_option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={OnRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search_option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={OnRadioChange}
          />
        </label>
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchForm;