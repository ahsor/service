import React from 'react';

const Movie = ({movie, removeMovie}) => {
    return (
       
    <li className="movie">
        <span className="movie-title">{movie.title}</span>
        <span className="movie-year"> {movie.year}</span>
        <button onClick={()=>{ removeMovie(movie.id)}}>삭제</button>
    </li>

    );
};

export default Movie;