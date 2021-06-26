import React, { Component } from 'react';
// import React from 'react';

class R02_Lifecycle extends Component {
    constructor(){
        super();
        this.name = {}
        console.log('2. constructor');
        {/* 단한번 호출되므로 여러번 실행하면 콘솔에 출력되지 않는다. */}
    }
    render() {
        console.log('3. render')
        return (
            <div>
               <h1> React Lifecycle </h1> 
            </div>
        );
    }
}

export default R02_Lifecycle;