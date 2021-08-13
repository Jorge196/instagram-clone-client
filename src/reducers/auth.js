
export default function AuthReducer(state = { authChecked: false }, action) {
    switch (action.type) {
      case "CHECK_LOGIN_STATUS":
        return {
          ...state,
          authChecked: true,
          loggedIn: false
        };
      case "LOG_IN":
        return {
          ...state,
          loggedIn: true
        };
      case "LOG_OUT":
        return {
          ...state,
          loggedIn: false
        };
      default:
        return state;
    }
  };
  