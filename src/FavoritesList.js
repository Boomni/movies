import React from 'react';

function FavoritesList(props) {
  const removeFavorite = (movie) => {
    props.removeFavorite(movie);
  };

  return (
    <div>
      <h3>Favorite Movies</h3>
      <ul>
        {props.favorites.map((movie) => (
          <div key={movie.imdbID}>
            <div>
              <img
                src={movie.Poster}
                alt={movie.Title}
                onClick={() => props.showModal(movie)} // Pass the movie correctly
              />
              <div>
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
              </div>
            </div>
            <button onClick={() => removeFavorite(movie)}>Remove Favorite</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
