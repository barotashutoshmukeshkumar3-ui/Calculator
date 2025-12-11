import React from 'react'; // Import React library for JSX and component rendering
import ReactDOM from 'react-dom/client'; // Import ReactDOM to render React components to the DOM
import './index.css'; 
import App from './App'; // Import the main App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
