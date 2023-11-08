import { useState } from 'react';
import Search from './Search';
import SearchList from './SearchList';
import FavoritesList from './FavoritesList';

function App() {
  const [searched, setSearched] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addSearched = (movie) => {
    setSearched([movie]);
  };

  const addToFavorites = (movie) => {
    if (!favorites.some(f => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeSearch = (movie) => {
    setSearched(searched.filter(f => f.imdbID !== movie.imdbID));
  };

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(f => f.imdbID !== movie.imdbID));
  };

  return (
    <div className="App">
      <Search addSearched={addSearched} />
      <SearchList searched={searched} removeSearch={removeSearch} addToFavorites={addToFavorites} />
      <FavoritesList favorites={favorites} removeFavorite={removeFavorite}/>
    </div>
  );
}

export default App;
