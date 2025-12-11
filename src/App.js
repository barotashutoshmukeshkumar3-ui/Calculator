import React from "react"; // Importing React to enable JSX usage
import KeyPadComponent from "./KeyPadComponent"; // Importing the main calculator component
import "./App.css";// Importing CSS for basic styling
function App() {
  return (
    
    <div className="App">    
      <KeyPadComponent />
    </div>
  );
}
export default App; // Exporting the App component so it can be used in index.js
