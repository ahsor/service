import React, { Component } from 'react';

class ClassChild extends Component {
    onBtnClick( param ){
        if(typeof param != 'string'){
            param = 'kim';
        }
        console.log( param + "클릭" );
    }
    render() {
        const {
            str,
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
          } = this.props;
      
        console.log( str );
        return (
            <div>
                 <ul>
                <li>불리언값: {boolValue}</li>
                <li>숫자값: {numValue}</li>
                <li>배열값: {arrayValue}</li>
                <li>객체값: {String(Object.entries(objValue))}</li>
                <li>노드값: {nodeValue}</li>
                
                <li>함수값: {String(funcValue)}</li>
               
            </ul>
                <button onClick={ this.onBtnClick } >my데이터</button>
                <button onClick={ e=>{this.onBtnClick('kim2')} } >my데이터</button>
            </div>
        );
    }
}

export default ClassChild;
