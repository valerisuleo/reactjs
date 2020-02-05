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
        const { isLiked, onLiked } = this.props;
        let dynamicIcon = isLiked ? 'heart' : ['far', 'heart'];
        return <FontAwesomeIcon onClick={onLiked} icon={dynamicIcon} style={{ cursor: 'pointer' }} />
    }
}

export default Like;
