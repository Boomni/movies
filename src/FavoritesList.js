import React from 'react';

function FavoritesList({ favorites, removeFavorite, showModal }) {
  const handleRemoveFavorite = (movie) => {
    removeFavorite(movie);
  };

  return (
    <div>
      <h3>Favorite Movies</h3>
      <ul>
        {favorites.map((movie) => (
          <div key={movie.imdbID}>
            <div>
              <img
                src={movie.Poster}
                alt={movie.Title}
                onClick={() => showModal(movie)}
              />
              <div>
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
              </div>
            </div>
            <button onClick={() => handleRemoveFavorite(movie)}>Remove Favorite</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
