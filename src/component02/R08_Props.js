import React, { Component } from 'react';
import datatype from 'prop-types';

class R08_Props extends Component {
  render() {
    let {
      name,
      age
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {name}{age}
    </div>
    )
  }
}

R08_Props.propTypes = {
    name: datatype.isRequired,
    //필수 데이타 지정 
}

export default R08_Props;