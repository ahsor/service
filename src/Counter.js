import React, {useState} from 'react';


const Counter = (props) => {
    const [count, setCount] =  useState(props.count);
    const counter=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={counter} > counter {count}</button>
        </div>
    );
};
Counter.defaultProps={
    count:0
}

export default Counter;