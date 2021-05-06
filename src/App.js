import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import PostsIndexContainer from "./containers/PostsIndexContainer";
import PostFormContainer from "./containers/PostFormContainer";

function App(){
  return (
    <div className="App">
      <Router>
        <nav className="text-center bg-purple-600 text-yellow-500 p-4">
          <NavLink 
            className="inline-block px-4 py-2" 
            activeClassName="text-yellow-300"
            exact
            to="/"
          >
            Posts
          </NavLink>
          <NavLink 
            className="inline-block px-4 py-2" 
            activeClassName="text-yellow-300"
            to="/posts/new"
          >
            New Post
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <PostsIndexContainer />
          </Route>
          <Route path="/posts/new" render={(routerProps) => <PostFormContainer anotherProp="myProp" {... routerProps}/>}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
