import React from 'react';

const Movie = (props) => {
    return (
       
    <li className="movie">
        <span>{props.movie.title}</span>
        <span> {props.movie.year}</span>
    </li>

    );
};

export default Movie;