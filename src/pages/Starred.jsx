import { useStarredShows } from '../shows/useStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();
  return <div>starred {starredShows.length} shows</div>;
};

export default Starred;
