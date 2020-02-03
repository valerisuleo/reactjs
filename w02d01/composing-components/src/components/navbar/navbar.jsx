import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        // console.log('nav', this.props);

        const {totalCount} = this.props;
        
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Total Count: {totalCount}
                </a>
            </nav>
        );
    }
}
 
export default Navbar;