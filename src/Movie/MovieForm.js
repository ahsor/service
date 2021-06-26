import React, { useState} from 'react';

function MovieForm({addMovie}) {
    // 단순한 props로 받아도 되지만 원하는 props값만을 받음
    // 함수를 props로 전달 받았음 
    // 때문에 기존에 있던 함수명과 겹치면 안됨
    
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  
  const onSubmit = (event) =>{
    event.preventDefault();
    addMovie({
        id:Date.now(),
        title:movieTitle,
        year:movieYear
    });
    setMovieTitle('');
    setMovieYear('');
    console.log(movieTitle, movieYear);
  }

  return (
   
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e=>setMovieTitle(e.target.value)}
          /><br />
          
        <input
          type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e=>setMovieYear(e.target.value)}
          /><br />
        <button>영화추가</button>
      </form>
      
  );
}

export default MovieForm;