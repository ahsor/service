import React, { Component, useState } from 'react';

function Counter(props){
    let [ count, setCount ] = useState(0); 
    const adding = () => {  
        setCount( ++count ); // 코드순서가 바뀌면 콘솔이 2번찍힘
        console.log( count );
    };
    return (
        <div>
             <h1 id="Hello"> { props.counterName || '기본값' } {count} </h1>
             <button onClick={ adding }>Click</button>
        </div>
    );
};

export default Counter;