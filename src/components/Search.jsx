import { useContext } from 'react';

import { SearchTermContext } from '../context/SearchTerm';

function Search() {
  const { searchTerm, changeSearchTerm } = useContext(SearchTermContext);

  return (
    <input
      className='search'
      type='text'
      placeholder='Los Angeles, US'
      value={searchTerm}
      onChange={changeSearchTerm}
    />
  );
}

export default Search;
