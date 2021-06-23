import React, { Component } from "react";
import "./App.css";

import http from './service/httpService';
import config from './config.json';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        const response = await http.get(config.postAPI);
        const posts = response.data;
        // console.log(posts);
        this.setState({ posts })
    }

     handleAdd = async () => {
        const obj = {
            title: 'title',
            body: 'body',
        }
        const response = await http.post(config.postAPI, obj);
        const postNew = response.data;
        const posts = [...this.state.posts];
        posts.push(postNew);
        // const posts = [postNew, ...this.state.posts] // to make postNew appears at the top of the list
        this.setState({ posts })
    };

    handleUpdate = async (post) => {
        post.title = 'UPDATED';
        const response = await http.put(config.postAPI + `/${post.id}`, post);
        const postUpdated = response.data;

        const posts = [...this.state.posts];
        const findIndex = posts.findIndex((item) => {
            return item.id === post.id
        });
        posts[findIndex] = postUpdated;
        this.setState({ posts });
    };

    handleDelete = async (post) => {
        const defaultPosts = this.state.posts;
        const posts = [...this.state.posts];

        let postIndex = posts.indexOf(post);
        posts.splice(postIndex, 1);
        this.setState({ posts });

        // error handling
        try {
            // await http.put(config.postAPI + `/${post.id}`);
            await http.delete('https://jsonplaceholder.typicode.com/posts/coddio' + `/${post.id}`);
        } catch (error) {
            const { status } = error.response;

            if (status === 404) {
                console.log('404 - Not Found');
                toast.error(`Not Found ${status}`);
            } 
            this.setState({ posts: defaultPosts });
        }
    };

    render() {
        return (
            <React.Fragment>
                <ToastContainer></ToastContainer>

                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => this.handleUpdate(post)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(post)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
