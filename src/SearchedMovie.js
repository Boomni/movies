function SearchedMovie({ movie, removeSearch, addToFavorites }) {

  const handleRemove = (e) => {
    e.stopPropagation();
    removeSearch(movie);
  };

  const handleAddToFavorites = () => {
      addToFavorites(movie);
  };

  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
        <button onClick={handleRemove}>Remove Movie</button>
        <button onClick={handleAddToFavorites}>Add to Favorite</button>
        </div>
    </div>
  );
}

export default SearchedMovie;