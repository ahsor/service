import React, { Component } from 'react';
// import React from 'react';

class R03_Lifecycle extends Component {
    static getDerivedStateFromProps(props){
        {/*  constructor 다음으로 호출 되는 함수     */}
        console.log('3. getDerivedStateFromProps ' + props.props_value);
        {/* 전달받은 props_value를 컴포넌트에서 props접근하여 출력한다. 
        */}
        return {}
    }
    
    constructor(){
        super();
        this.name = {}
        console.log('2. constructor');
    }
    componentDidMount(){
        {/*  가장 마지막으로 호출 되는 함수로 화면이 모두 그려진 후에
         실행하는 이벤트 처리와 초기화등에 활용된다.      */}
        console.log('5. componentDidMount');
    }
    shouldComponentUpdate(props, state){
        {/*  state 변경이 발생될때 실행되는 함수로 state 변경이 없다면 호출되지 않는다.     */}
         console.log('5. shouldComponentUpdate');
    }
    render() {
        console.log('4. render')
        return (
            <div>
               <h1> React Lifecycle </h1> 
            </div>
        );
    }
}

export default R03_Lifecycle;