import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PostsIndexContainer from "./containers/PostsIndexContainer";
import PostFormContainer from "./containers/PostFormContainer";
import NewCommentContainer from "./containers/NewCommentContainer";
import PostShowContainer from "./containers/PostShowContainer";
import { fetchPosts } from "./actions/posts";
import withAuth from "./components/auth/withAuth"
import Navbar from "./components/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
class App extends Component {
  
  componentDidMount() {
    this.props.dispatchFetchPosts();
  }
    render(){
      return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"
              component={withAuth(PostsIndexContainer)}
            />

            {/* Post Dashboard */}
            {/* Create a new post*/}
            <Route 
              exact path="/posts/new" 
              component={withAuth(PostFormContainer)} 
            />
            {/* Create a new comment on post */}
            <Route 
              exact path="/posts/:postId/comments/new" 
              component={withAuth(NewCommentContainer)}
            />

            {/* View post */}
            <Route 
              exact path="/posts/:postId" 
              component={withAuth(PostShowContainer)} 
            />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      dispatchFetchPosts: () => dispatch(fetchPosts())
  }
}


export default connect (null, mapDispatchToProps)(App);