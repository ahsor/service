import React , {useState} from 'react';
/*
const ClassFunction = (props) => {
    const  superData  = props.data;
    console.log( superData );
    return (
        <div>
            <h1> {props.data} </h1>
            <h1> {superData} </h1>
        </div>
    );
};
*/
/*
const ClassFunction = (props) => {
    const {
        str,
        boolValue,
        numValue,
        arrayValue,
        objValue,
        nodeValue,
        funcValue,
      } = props;
  
    console.log( 'str= ' + str );

    function onBtnClick( param ){
        if(typeof param !== 'string'){
            param = 'park';
        }
        console.log( param + "클릭" );
    }
    return (
        <div>
            <ul>
                <li>불리언값: {str}</li>
                <li>불리언값: {boolValue}</li>
                <li>숫자값: {numValue}</li>
                <li>배열값: {arrayValue}</li>
                <li>객체값: {String(Object.entries(objValue))}</li>
                <li>노드값: {nodeValue}</li>
                <li>함수값: {String(funcValue)}</li> 
            </ul>
            <button onClick={ onBtnClick } >my데이터</button>
            <button onClick={ e=>{onBtnClick('park2')} } >my데이터</button>
        </div>
    );
};
*/
const ClassFunction = (props) => {
    //let name = props.str;
    const [ name, setName ] = useState(props.str);
    let [ cnt, setCount ] = useState(0);

    function onBtnClick(param){
        setCount(++cnt);
        let newName = name === 'string' ? 'park' : param; 
        console.log( newName + cnt );
        setName(newName )
    }
    
    return (
        <div>
            <h1> {props.data} </h1>
            <h1> {name} {cnt }</h1>
            <button onClick={onBtnClick} >change state</button>
            <button onClick={e=>{onBtnClick('uuu')}} >change state</button>
        </div>
    );
};

export default ClassFunction;