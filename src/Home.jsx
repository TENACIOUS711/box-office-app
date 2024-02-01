import { useState } from 'react';

const Home = () => {
  const [searchStr, SetSearchStr] = useState('');

  const OnSearchInputChange = ev => {
    SetSearchStr(ev.target.value);
  };
  const OnSearch = async ev => {
    ev.preventDefalut();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);
  };

  return (
    <div>
      <form onSubmit={OnSearch}>
        <input type="text" value={searchStr} onChange={OnSearchInputChange} />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Home;
