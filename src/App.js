import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#040c79c7';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      
      setInterval(() => {
        document.title = "TextUtils is Amazing mode.";
      }, 2000);
      
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter a text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;