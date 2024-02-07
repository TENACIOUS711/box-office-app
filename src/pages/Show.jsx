import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getShowById } from '../TvMaze';
import { useState } from 'react';

const Show = () => {
  const { showId } = useParams();

  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    // getShowById();
    async function fetchData() {
      // You can await here
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }
    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading..</div>;
};

export default Show;
