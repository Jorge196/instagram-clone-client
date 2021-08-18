import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./auth/Logout";
import { checkAuth } from "../actions/auth";

class Navbar extends React.Component {
  componentDidMount() {
    // this.props.dispatchCheckAuth();
  }

  renderAuthLinks() {
    const { loggedIn, currentUser } = this.props;
      return loggedIn ? (
        <>
            <div className='sm:text-left'>
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
            </div>
            {currentUser.email}
            <Logout />
        </>
      ) : (
        <>
          <NavLink
            className='p-4 inline-block'
            activeClassName='text-blue-900'
            exact
            to='/signup'
          >
            Sign Up
          </NavLink>
          <NavLink
            className='p-4 inline-block'
            activeClassName='text-blue-900'
            exact
            to='/login'
          >
            Log In
          </NavLink>
        </>
      );
  }

  render() {
    return (
        <nav className="text-center bg-purple-600 text-yellow-500 p-4">
        <div className='sm:text-right'>
            {this.renderAuthLinks()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCheckAuth: () => dispatch(checkAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);