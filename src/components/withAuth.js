import { connect } from "react-redux";
import React from "react";
import { checkLoginStatus, loginUser } from "../actions/auth";

function withAuth(WrappedComponent) {
  class AuthorizedComponent extends React.Component {
    
    componentDidMount() {
      setTimeout(() => {
        this.props.dispatchCheckLoginStatus();
        console.log(this.props);
      }, 1500);
    }

    render() {
      console.log("rendered with props:", this.props);
      if (!this.props.authChecked) {
        return "loading...";
      } else if (!this.props.loggedIn) {
        return (
          <p>
            You need to{" "}
            <button onClick={() => this.props.dispatchLoginUser()}>
              Login
            </button>{" "}
            first
          </p>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      authChecked: state.authChecked,
      loggedIn: state.loggedIn
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckLoginStatus: () => dispatch(checkLoginStatus()),
      dispatchLoginUser: () => dispatch(loginUser())
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent);
}

export default withAuth;
