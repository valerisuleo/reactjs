import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
        // tags: []
    }

    styles = {
        fontSize: 50,
        fontWeight: 'bold',
    }

    render() { 

        let classes = this.getBadgeClass();
        const { tags } = this.state;

        return (
            <React.Fragment>
                <span style={this.styles} className={ classes }>
                    {this.formatCount()}
                </span> 
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

                <ul>
                    {/* {this.renderTags()} */}
                    {tags.map(tag => <li onClick={() => this.getCurrenItem(tag)} key={tag}>{tag}</li>)}
                    {tags.length === 0 && 'Pls create a tag!'}
                </ul>
            </React.Fragment>
        )
    }

    getBadgeClass() {
        let classes = 'badge m-2 badge ';
        classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        // let count = this.state.count;
        return count === 0 ? 'Zero' : count;
    }
    
    renderTags() {
        const { tags } = this.state;
        if (tags.length === 0) return <p>There are no tags!</p>
        // else...
        return <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getCurrenItem = (e) => {
        const current = e;
        console.log('current', current);
    }

    handleIncrement = () => {
        this.setState({ 
            count: this.state.count + 1 
        });
    }
}
 
export default Counter;