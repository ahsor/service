import React from 'react';
import PropTypes from 'prop-types';

class Datatype extends React.Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;

    return (
      <ul>
        <li>불리언값: {boolValue}</li>
        <li>숫자값: {numValue}</li>
        <li>배열값: {arrayValue}</li>
        <li>객체값: {String(Object.entries(objValue))}</li>
        <li>노드값: {nodeValue}</li>
        /** {this.props.children} 노드 출력하는 법 */
        <li>함수값: {String(funcValue)}</li>
        /** 문자열로 바꾸어 출력  */
      </ul>
    );
  }
}

Datatype.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
 } 

export default Datatype;
