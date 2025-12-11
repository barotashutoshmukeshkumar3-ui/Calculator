import React, { useState } from "react"; // Import React and useState hook to manage component state
import Button from "./Button";  // Import the reusable Button component
import "./Calculator.css";  // Import CSS for styling the calculator
function KeyPadComponent() {
  const [text1, setText] = useState("");
  const ClickHandle = (e) => {
    const value = e.target.value; // Get value of clicked button

    if (value === "C") {
      setText("");
    } else if (value === "=") {
      try {
        setText(eval(text1).toString()); 
      } catch {
        setText("Error"); // Show error for invalid expressions
      }
    } else if (value === "square") {
      // Square the current input
      const num = parseFloat(text1);
      setText(!isNaN(num) ? (num * num).toString() : "Error");
    } else if (value === "show me") {
      // Show image when "show me" button clicked
      setText("show me");
    } else {     
      setText(text1 + value);
    }
  };

  return (
    <div className="Calculator">
      <h2>React Calculator</h2>
      <div className="screen-row">
        <input 
          type="text" 
          readOnly 
          value={text1 === "show me" ? "" : text1} // Hide text when image is shown
        />
      </div>
      <div className="Keypad">
        {/* Row 1 */}
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />

        {/* Row 2 */}
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />

        {/* Row 3 */}
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />

        {/* Row 4 */}
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />

        {/* Row 5 */}
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />

        
        <Button label="square" ClickHandle={ClickHandle} />  {/*button for Squeare*/}
        <Button label="show me" ClickHandle={ClickHandle} />  {/*button for Show me*/}
      </div>

      {text1 === "show me" && (
        <div className="image-display">
          <img src="solved.jpg" alt="Placeholder"/> {/*Image for Show me button*/} 
        </div>
      )}
    </div>
  );
}
export default KeyPadComponent; // Export the KeyPadComponent so it can be used in App.js
