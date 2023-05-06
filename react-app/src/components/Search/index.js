import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchThunk } from '../../store/search';
import { Link } from 'react-router-dom';
import './search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResult = useSelector(state => state.searchReducer);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(searchThunk(searchTerm));
  };

  return (
    <div className="search-results">
      {searchResult && Object.keys(searchResult).length > 0 ? (
        Object.values(searchResult).map((product) => (
          <div key={product.id} className="search-result">
            <Link to={`/products/${product.id}`}>
              {/* <div className="search-result-image" style={{ backgroundImage: `url(${product.image})` }}></div> */}
              <div className="search-result-details">
                <h3 className="search-result-title">{product.name}</h3>
                <p className="search-result-description">{product.description}</p>
                <p className="search-result-price">{product.price}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
};


export default Search;
