import React from 'react';
import './styles/SearchResultsList.css'
import SearchResult from './SearchResult';

const SearchResultsList = ({results}) => {
    return (
      <div className="results-list">
      {
        results.map((result,id) => 
        {
          return <SearchResult  key={id} result ={result.name}/>         
        }
      )}
      </div>
    )
};
export default SearchResultsList