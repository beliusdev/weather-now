import { useState, createContext } from 'react';

export const SearchTermContext = createContext();

function SearchTerm({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const changeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchTermContext.Provider value={{ searchTerm, changeSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
}

export default SearchTerm;
