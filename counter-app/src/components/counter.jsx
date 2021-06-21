import React, { Component } from 'react'


class Counter extends Component {

    state = {
        count:0,
        
    }

    styles = {
        fontSize:30,
        background:'blue',
    }

    render() { 
        return (
            <React.Fragment>
            <span style={this.styles} className='badge m-2'> 
                {this.formatCount()}
                </span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            </React.Fragment>
         );
    }

    formatCount() {

        const {count} = this.state

        return count === 0 ? 'zero': count
        
    }
}
 
export default Counter;