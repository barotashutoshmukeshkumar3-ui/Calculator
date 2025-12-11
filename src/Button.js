import React from "react"; // Import React to use JSX
import "./Calculator.css"; // Import the CSS file for styling buttons
const Button = (props) => {
  return (
    <button
      className="ButtonStyle"       // Applies styling from Calculator.css
      value={props.label}           // Sets the button's value
      onClick={props.ClickHandle}   // Calls the parent function when clicked
    >
      {props.label}                 
    </button>
  );
};


export default Button; // Export the Button component so it can be used in KeyPadComponent
