import React, {useState} from 'react';

const Counter = (props) => {
    const [count, setCount] =  useState( props.count);
    
    const str = props.str || "click";

    const counter=()=>{
        setCount(count+1);
    }
    return (
        <div>
           { count }
        </div>
    );
};

Counter.defaultProps={
    count:0//
}

export default Counter;