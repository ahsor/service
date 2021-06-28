import React from 'react';

const Movie = ({movie, removeMovie}) => {
    return (
       
    <li className="movie">
        <span>{movie.id}</span>
        <span>{movie.title}</span>
        <span> {movie.year}</span>
        <button onClick={()=>removeMovie(movie.title)}>삭제</button>
    </li>

    );
};

export default Movie;