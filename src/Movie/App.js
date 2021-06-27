
import React, { useState } from 'react';
import Movie from './Movie';

function App() {
  const [movies, setMovies] = useState([
    {id:1, title:'아라비카', year:2001},
    {id:2, title:'콜롬비아', year:2006},
    {id:3, title:'에티오피아', year:2010},
    {id:4, title:'아프리카', year:2011},
  ])

  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');

  const renderMovie = movies.map(movie=>{
    return(
      <Movie movie={movie} key={movie.id}/>
    )
  })
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(movieTitle, movieYear);
    setMovies(
      [...movies,
        {
          title:movieTitle,
          year:movieYear
        }
      ]
    )
    /*
    movies.push({
      title:movieTitle,
      year:movieYear
    })
    */
  }
  return(
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text"
               placeholder="영화제목"
               onChange={e=>setMovieTitle(e.target.value)} 
               value={movieTitle}
        /> <br />
        
        <input type="text"
               placeholder="개봉년도"
               onChange={e=>setMovieYear(e.target.value)} 
               value={movieYear}
        /> <br />
        <button type="submit">영화 추가</button>
      </form>
      { renderMovie }
    </div>
  )
}

export default App;