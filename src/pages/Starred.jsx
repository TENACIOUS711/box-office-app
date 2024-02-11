import { useStarredShows } from '../shows/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowByIds } from '../TvMaze';
import ShowGrid from '../shows/ShowGrid';

const Starred = () => {
  const [starredShowIds] = useStarredShows();

  const { data: starredshow, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowIds],
    queryFn: async () => {
      const result = await getShowByIds(starredShowIds);
      // Map the result to include 'show' property for each item
      return result.map(show => ({ show }));
    },
    refetchOnWindowFocus: false,
  });

  console.log(starredshow);
  if (starredShowsError) {
    return <div>Error: {starredShowsError.message}</div>;
  }
  if (starredshow?.length === 0) {
    return <div>No starred shows found.</div>;
  }
  if (starredshow?.length > 0) {
    return <ShowGrid shows={starredshow} />;
  }
  return <div>Shows are loading...</div>;
};

export default Starred;
