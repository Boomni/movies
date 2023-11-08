import SearchedMovie from './SearchedMovie';

function SearchList(props) {
  return (
    <div>
{props.searched.length > 0 ? (
  <ul>
    <h3>Search Result</h3>
    {props.searched.map(movie => (
      <SearchedMovie
      movie={movie}
      removeSearch={props.removeSearch}
      addToFavorites={props.addToFavorites}
      removeFavorite={props.removeFavorite}
      showModal={props.showModal} />
    ))}
  </ul>
) : (
  <p>Search for a movie</p>
)}
    </div>
  );
}

export default SearchList;
