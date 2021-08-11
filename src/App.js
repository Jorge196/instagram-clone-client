import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import PostsIndexContainer from "./containers/PostsIndexContainer";
import PostFormContainer from "./containers/PostFormContainer";
import NewCommentContainer from "./containers/NewCommentContainer";
import PostShowContainer from "./containers/PostShowContainer";
import { fetchPosts } from "./actions/posts";
import { connect } from "react-redux";
import requireAuth from './components/requiresAuth';
class App extends Component {
  
  componentDidMount() {
    this.props.dispatchFetchPosts();
  }
    render(){
      return (
      <div className="App">
        <Router>
          <nav className="text-center bg-purple-600 text-yellow-500 p-4">
            <NavLink 
              className="inline-block hover:text-yellow-400 px-4 py-2" 
              activeClassName="text-yellow-300"
              exact
              to="/"
            >
              Posts
            </NavLink>
            <NavLink 
              className="inline-block hover:text-yellow-400 px-4 py-2" 
              activeClassName="text-yellow-300"
              to="/posts/new"
            >
              New Post
            </NavLink>
          </nav>
          <Switch>
            <Route path="">
              <Route path="/signin" component={SignIn}/>
              <Route path="/app" component={requireAuth(App)}>
                <Route name="dashboard" path="dashboard" component={Dashboard} />
                <Route name="profile" path="profile" component={UserProfile} />
              </Route>
            </Route>
            <Route exact path="/">
              <PostsIndexContainer />
            </Route>
            <Route 
              path="/posts/new" 
              component={PostFormContainer} 
            />
            <Route 
              path="/posts/:postId/comments/new" 
              component={NewCommentContainer} 
            />
            <Route 
              path="/posts/:postId" 
              component={PostShowContainer} 
            />
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
