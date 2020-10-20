import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
    state = {
        loadedPost: null
    };
    componentDidUpdate() {
        console.log(this.props.match.params.id);
        
        if (this.props.match.params.id) {
            
                axios
                    .get(
                        "https://jsonplaceholder.typicode.com/posts/" +
                        this.props.match.params.id
                    )
                    .then(response => {
                        console.log(response.data);
                        this.setState({ loadedPost: response.data });
                    });
            
        }
    }
    deletePostHandler = () => {
        axios
            .delete(
                "https://jsonplaceholder.typicode.com/posts/" +
                this.props.match.params.id
            )
            .then(response => {
                console.log(response);
            });
    };
    render() {
        let post = <p style={{ textAlign: "center" }}>Loading......</p>;
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                            className="Delete"
                            onClick={this.deletePostHandler}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
