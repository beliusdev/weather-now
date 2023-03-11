import { useState, createContext, useContext, useEffect } from 'react';

import { SearchTermContext } from './SearchTerm';

export const DataContext = createContext();

function Data({ children }) {
  const [data, setData] = useState(null);
  const { searchTerm } = useContext(SearchTermContext);

  const changeData = (value) => setData(value);

  useEffect(() => {
    if (!searchTerm) setData({});
  }, [searchTerm]);

  return (
    <DataContext.Provider value={{ changeData, data }}>
      {children}
    </DataContext.Provider>
  );
}

export default Data;
