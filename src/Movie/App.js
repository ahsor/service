// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Movie from './Movie/Movie';
import MovieForm from './Movie/MovieForm';
import Subclass from './Subclass';
import Subclass2 from './Subclass2';

function App() {
  /*
  const [movies, setMovies] = useState( []);

  const removeMovie = (id)=>{
      setMovies(movies.filter(movie=> {return movie.id !== id;} ))
      console.log('삭제', id)
  }

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie 
        movie={movie} `
        key={movie.id}
        removeMovie={removeMovie}
      />
    );
  }) : '추가된 영화가 없습니다.';

  const addMovie = (movie) =>{
    setMovies([...movies, movie]);
    //console.log(movieTitle, movieYear);
  }
  */
  const ary = ["한글2","5","456"];
  const obj = { name:'kim'}
  return (
    <div className="App">
      <h1> 영화 목록 </h1>
      <Subclass str={obj} />
      <Subclass2 str2={obj} />
    </div>
  );
}

export default App;