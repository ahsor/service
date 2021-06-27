
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
      <Movie />
    )
  })
  return(
    <div className="App">
      { renderMovie }
    </div>
  )
}
/*
function App() {
  const array = [1,2,3];
  const obj = {name:'kim', age:30};
  const node = <h1>제목노드</h1>;
  const func = ()=>{ console.log('메시지')}

  return(
    <div className="App">
      <h1> 컴포넌트 비교 </h1>
        <ClassChild
          str={"kim"}
          boolValue={true}
          numValue={1}
          arrayValue={array}
          objValue={obj}
          nodeValue={node}
          funcValue={func}
      />
      
      <ClassFunction str={"park"}
          boolValue={true}
          numValue={1}
          arrayValue={array}
          objValue={obj}
          nodeValue={node}
          funcValue={func}/>
    </div>
  )
}
*/
export default App;