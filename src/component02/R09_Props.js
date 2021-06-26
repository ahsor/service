import React, { Component } from 'react';
class R09_PropsNode extends Component {
    render() {
      return (
      <div style={{padding: "0px"}}>
        {this.props.children}
      </div>
      )
    }
  }
  
  export default R09_PropsNode;
  