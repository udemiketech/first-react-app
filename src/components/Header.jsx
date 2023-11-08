import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: "center",
  };
  return (
    <div style={headerStyles}>
      <h2>{text}</h2>
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
