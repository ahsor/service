import React, { Component } from 'react';

class Subclass extends Component {
    
    render() {
        let { str } = this.props;
        //console.log( this.props )
        return (
            <div style={{ color:"red"}}>
                {str.name}
                {String(Object.entries(str))}
            </div>
        );
    }
}

export default Subclass;