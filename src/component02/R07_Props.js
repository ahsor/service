import React, { Component } from 'react';
import datatype from 'prop-types';

class R07_Props extends Component {
  render() {
    let {
      ObjectJson
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {JSON.stringify(ObjectJson)}
    </div>
    )
  }
}

R07_Props.propTypes = {
  ObjectJson: datatype.shape({
    name: datatype.string,
    age: datatype.number
  })
}

export default R07_Props;