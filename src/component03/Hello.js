import React, { Component } from 'react';

function Hello() {
    let name = "kim";
    function changeName(){
        name = name === "kim" ? "park" : "kim";
        console.log(name);
        document.getElementById('name').innerHTML = name;
    }
    return (
        <div>
            <h1>state</h1>
            <h2 id="name"> {name} </h2>
            <button onClick={changeName}> changeName </button>
        </div>
    );
}

export default Hello;