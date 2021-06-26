import React, { Component } from 'react';

class R05_Props extends Component {
  render() {
    let props_value = this.props.props_val;
    props_value += ' 수정도 가능'
    return (
    <div>{props_value}</div>
    )
  }
}

export default R05_Props;