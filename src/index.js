import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SearchTerm from './context/SearchTerm';
import Data from './context/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchTerm>
      <Data>
        <App />
      </Data>
    </SearchTerm>
  </React.StrictMode>
);
