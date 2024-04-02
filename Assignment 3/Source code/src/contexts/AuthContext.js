import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import FakeUser from "../data/FakeUser";
const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login": // If the action type is login, then return the new state with the user and isAuthenticated
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout": // If the action type is logout, then return the new state with the user and isAuthenticated
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "updateBalance":
      return {
        ...state,
        user: {
          ...state.user,
          balance: action.payload,
        },
      };
    default: // If the action type is not login or logout, then return the current state
      return state;
  }
}
function AuthProvider({ children }) {
  // The AuthProvider component will be used to wrap the App component
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // check if the API endpoint is not work, then the username and password will be compared with the FAKE_USER
  async function login({ username, password }) {
    // The login function will be used to login the user
    if (username === FakeUser.email && password === FakeUser.password) {
      dispatch({
        type: "login",
        payload: FakeUser,
      });
      toast.success("Login Successful", { toastId: "toast" });
      return;
    } else {
      dispatch({
        type: "login",
        payload: {
          username,
          password,
          name: "admin",
        },
      });
    }
    toast.success("Login Successful", { toastId: "toast" });
  }

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  const updateBalance = (value) => {
    dispatch({
      type: "updateBalance",
      payload: value,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        updateBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
export { AuthProvider, useAuth };
