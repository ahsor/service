import React, { Component } from 'react';

class R06_Props extends Component {
  render() {
    let {
      BooleanTrueFalse
    } = this.props
    //현재 변수명 새로 지정 
    return (
    <div style={{padding: "0px"}}>
      {BooleanTrueFalse ? '2. ' : '1. '}
      {BooleanTrueFalse.toString()}
    </div>
    )
  }
}

export default R06_Props;