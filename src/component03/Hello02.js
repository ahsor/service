import { useState } from 'react';

function Hello02() {
    const [name, setName] = useState('kim');
    
    function changeName(){
        const newName = name === "jemicom" ? 'kim' : 'jemicom';
        console.log( name );
        setName(newName);
    }
    return (
        <div>
            <h1>state</h1>
            <h2 id="name"> {name} </h2>
            <button onClick={changeName}> changeName </button>
        </div>
    );
}

export default Hello02;