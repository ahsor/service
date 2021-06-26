import React, { Component } from 'react';

class Todo extends Component {
    render() {
        let { 
            tododata
         } = this.props;
        return (
            <nav  style={{backgroundColor :'skyblue'}}>
                <ul>
                    <li>{tododata}</li>
                </ul>
            </nav>
        );
    }
  }

export default Todo; 