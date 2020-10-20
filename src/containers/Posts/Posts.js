import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

import axios from "axios";

import Post from "../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
    state = {
        posts: []
        // viewId: null
    };
    componentDidMount() {
        console.log(this.props);

        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data
                    .map(post => {
                        return { ...post, author: "Max" };
                    })
                    .slice(0, 4);
                this.setState({ posts });
            });
    }
    fullPostViewHandler = id => {
        this.props.history.push("/post/" + id);
    };
    render() {
        const posts = this.state.posts.map(post => {
            return (
                // <Link to={'/'+post.id} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.fullPostViewHandler(post.id)}
                />
            );
        });
        return (
            <div>
                <section className="Posts">{posts}</section>
                <Route path="/post/:id" component={FullPost}/>
            </div>
        );
    }
}
export default Posts;
