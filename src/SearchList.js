import SearchedMovie from './SearchedMovie';

function SearchList({ searched, removeSearch, addToFavorites, showModal }) {
  return (
    <div>
      {searched.length > 0 ? (
        <ul>
          <h3>Search Result</h3>
          {searched.map(movie => (
            <SearchedMovie
              key={movie.imdbID}
              movie={movie}
              removeSearch={removeSearch}
              addToFavorites={addToFavorites}
              showModal={showModal}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default SearchList;