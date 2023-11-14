function SearchedMovie({ movie, removeSearch, addToFavorites, showModal }) {

  const handleRemove = (e) => {
    e.stopPropagation();
    removeSearch(movie);
  };

  const handleAddToFavorites = () => {
      if (movie.Title) {
        addToFavorites(movie);
        alert(`${movie.Title} sucessfully added to your favourite list!`)
      } else {
        alert(`Invalid Movie!`)
      }
  };

  const handleshowModal = () => {
    showModal(movie)
  }

  return (
    <div>
      <div onClick={handleshowModal}>
        <img src={movie.Poster} alt={movie.Title} />
        <div>
          <h4>{movie.Title}</h4>
          <p>{movie.Year}</p>
        </div>
      </div>
        <button onClick={handleRemove}>Back</button>
        <button onClick={handleAddToFavorites}>Add to Favorite</button>
    </div>
  );
}

export default SearchedMovie;