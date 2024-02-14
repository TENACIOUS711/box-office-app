import { useState } from 'react';
import { useSearchStr } from './useSearchStr';
import CustomRadio from './CustomRadio';
import { styled } from 'styled-components';

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
        <SearchInput
          type="text"
          placeholder={
            searchOption === 'shows' ? 'Search shows...' : 'Search actors...'
          }
          value={searchStr}
          onChange={OnSearchInputChange}
        />
        <RadiosWrapper>
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
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
