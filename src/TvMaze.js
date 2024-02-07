const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);

  const body = await response.json();
  return body;
};

export const searchForShows = query => {
  return apiGet(`/search/shows?q=${query}`);
};
export const searchForActors = query => {
  return apiGet(`/search/people?q=${query}`);
};
export const getShowById = showId => apiGet(`/shows/${showId}`);
