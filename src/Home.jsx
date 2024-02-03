import { useState } from 'react';
import { searchForShows, searchForActors } from './TvMaze';

const Home = () => {
  const [searchStr, SetSearchStr] = useState('');
  const [apiData, SetApiData] = useState(null);
  const [apiDataError, SetApiDataError] = useState(null);
  const [searchOption, SetSearchOption] = useState('shows');

  const OnSearchInputChange = ev => {
    SetSearchStr(ev.target.value);
  };

  const OnRadioChange = ev => {
    SetSearchOption(ev.target.value);
  };
  const OnSearch = async ev => {
    ev.preventDefault();

    try {
      SetApiDataError(null);
      if (searchOption === 'shows') {
        const result = await searchForShows(searchStr);
        SetApiData(result);
      } else {
        const result = await searchForActors(searchStr);
        SetApiData(result);
      }
    } catch (error) {
      SetApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };
  return (
    <div>
      <form onSubmit={OnSearch}>
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
