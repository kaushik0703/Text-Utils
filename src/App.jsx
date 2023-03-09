import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  //As previously alert was null so we have to get a function to make alert a object
  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type : type
    })
    
    //this will setAlert to null after 1 sec
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //this toggle will be activated in navbar component
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" ,"Success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" ,"Success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below to analyze" mode={mode}/>} />
        <Route exact path="/about" element={<About/>} />
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App