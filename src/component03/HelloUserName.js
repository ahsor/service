import { useState } from 'react';
import UserName from './UserName';

export default function Hello(props) {
    console.log( props );
    const [name, setName] = useState('jemicom');
    const [age, setAge] = useState(props.age);
    {/*// 새로운 state를 만들어 사용하여 전달받은 props를 변경할 수 있음*/ }
    return (
        <div>
            <h1>STATE</h1>
            <h2 id="name">{name}({age}세)</h2>
            <UserName name={name} />
            <button onClick={()=>{
                setName(name === "jemicom" ? "kim" : "jemicom" );
                setAge(age+1);
            }}>Change</button>
        </div>
    );
}
