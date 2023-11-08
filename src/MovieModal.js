import React from 'react';
import Modal from 'react-modal';

function MovieModal({ movie, isModalOpen, closeModal }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={movie.Title}
      >
      <div>
        <span onClick={closeModal}>&times;</span>
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
                <h2>Title: {movie.Title}</h2>
                <p>Year: {movie.Year}</p>
            </div>
            <div>
                <p><strong>Genre: </strong>{movie.Genre}</p>
                {movie.Ratings.map((rating, index) => (
                    <p key={index}><strong>Ratings {index + 1}: </strong>{rating.Source} - {rating.Value}</p>
                ))}
                <p><strong>Runtime: </strong>{movie.Runtime}</p>
                <p><strong>Cast: </strong>{movie.Actors}</p>

            </div>
        </div>
      </div>
    </Modal>
  );
}

export default MovieModal;
