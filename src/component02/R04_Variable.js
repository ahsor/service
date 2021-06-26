import React, { Component } from 'react';

class R04_Variable extends Component {
    componentDidMount(){
        var str = 'react.jsx';
        var num = 10;
        var boolData = true; 
        var arry = ['a', 1, '한글'];
        const obj = { name :'kim', age :30}
        console.log( str )
        console.log( num )
        console.log( boolData )
        console.log( arry )
        console.log( obj )
    }
    render() {
        return (
            <div>
                <h2> 값 초기화 방법 1 </h2>
                <p>콘솔창을 열어 함수 호출을 확인하기</p>
                
            </div>
        );
    }
}

export default R04_Variable;
