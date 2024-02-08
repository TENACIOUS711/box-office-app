import { useState } from 'react';
import { searchForShows, searchForActors } from '../TvMaze';
import SearchForm from '../SearchForm';
import ActorGrid from '../actors/ActorGrid';
import ShowGrid from '../shows/ShowGrid';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForActors(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const OnSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No Results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
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
