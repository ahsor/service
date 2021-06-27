import React, {useState} from 'react';

const Counter = (props) => {
    const [count, setCount] =  useState(props.count);
    const str = props.str || "counter click";

    const counter=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={counter} > { str } {count}</button>
        </div>
    );
};

Counter.defaultProps={
    count:0
}

export default Counter;