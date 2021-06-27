
import React, { useState } from 'react';
import Movie from './Movie';

function App() {
  const movies = [
    {id:1, title:'아라비카', year:2001},
    {id:2, title:'콜롬비아', year:2001},
    {id:3, title:'에티오피아', year:2001},
    {id:4, title:'아프리카', year:2001},
  ]
  const renderMovie = movies.map(movie=>{
    return(
       <Movie movie={movie} />
    )
  })
  return(
    <div className="App">
      { renderMovie }
    </div>
  )
}
export default App;
