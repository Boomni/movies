import { useState } from 'react';
import Search from './Search';
import SearchList from './SearchList';
import FavoritesList from './FavoritesList';
import MovieModal from './MovieModal';

function App() {
  const [searched, setSearched] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectMovie, setSelectedMovie] = useState(null)

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

  const showModal = (movie) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedMovie(null)
    setIsModalOpen(false)
  }

  return (
    <div className="App">
      <Search addSearched={addSearched} />
      <SearchList
        searched={searched}
        removeSearch={removeSearch}
        addToFavorites={addToFavorites}
        showModal={showModal}
      />
      <FavoritesList
        favorites={favorites}
        removeFavorite={removeFavorite}
        showModal={showModal}
      />
      { selectMovie && (
        <MovieModal isModalOpen={isModalOpen} closeModal={closeModal} movie={selectMovie}/>
      )}
      <footer>
        <p>
          Proudly made by Jonathan Boomni. Copyright. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
