import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

class Blog extends Component {
    render() {
        return (
            <div>
                <header className="Header">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/post">Home</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname:"/new-post",
                                    hash:"#submit",
                                    search: "?quick-submit=true"
                                }}>New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/post" component={Posts}/>
                </Switch>
                {/* <Route path="/" exact component={Posts}/>
                <Route path="/:id" component={FullPost}/>
                    <Route path="/new-post" component={NewPost}/> */}

                {/* <section className="Posts">{posts}</section>
                <section>
                    <FullPost viewId={this.state.viewId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;
