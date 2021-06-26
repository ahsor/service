// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  
  return(
    <div className="App">
      <h1> 컴포넌트 비교 </h1>
        
        <Counter/>
        <Counter count={10}/>
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