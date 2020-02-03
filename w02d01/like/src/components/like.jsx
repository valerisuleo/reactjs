import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Like extends Component {
    
    render() {
        return (
            <div>
                {this.renderHearts()}
            </div>
        );
    }

    renderHearts() {
        if (this.props.isLiked === true) return <FontAwesomeIcon icon={'heart'} />
        return <FontAwesomeIcon icon={['far', 'heart']} />
    }
}

export default Like;
