import { useState } from 'react';

function Hello02() {
    const [name, setName] = useState('kim');
    
   
    return (
        <div>
            <h1>state</h1>
            <h2 id="name"> {name} </h2>
            <button onClick={()=>{
                setName(name === "lee" ? 'kim' : 'lee');
            }}> changeName </button>
        </div>
    );
}

export default Hello02;