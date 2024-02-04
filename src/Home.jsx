import { useState } from 'react';
import { searchForShows, searchForActors } from './TvMaze';
import SearchForm from './SearchForm';

const Home = () => {
  const [apiData, SetApiData] = useState(null);
  const [apiDataError, SetApiDataError] = useState(null);

  const OnSearch = async ({ q, searchOption }) => {
    try {
      SetApiDataError(null);
      if (searchOption === 'shows') {
        const result = await searchForShows(q);
        SetApiData(result);
      } else {
        const result = await searchForActors(q);
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
      <SearchForm OnSearch={OnSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
