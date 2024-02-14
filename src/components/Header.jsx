import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";
import { useAuth } from "../context/AuthContext";

function Header({ text, bgColor, textColor }) {
  const {deleteItem} = useLocalStorage("x-auth-token")
  const [state, dispatch] = useAuth()
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: "center",
  };

  const isAuthenticated = state.accessToken != null

  function logout(){
    deleteItem()
    dispatch({type: "setToken", payload:null})
  
  }
  
  return (
    <div style={headerStyles}>
      <h2>{text}</h2>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </div>
  );
}


Header.defaultProps = {
  text: "My Feedback App",
  bgColor: "yellow",
  textColor: "green",
};

// Header.defaultProps = {
//   text: PropTypes.string,
// };

export default Header;
