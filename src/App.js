import { useState } from "react";
import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [alert,setAlert] = useState(null);

// const showAlert = (message,type)=>{
//        setAlert({
//         msg:message,
//         type:type
//        })
//   }
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // showAlert("Dark mode enabled","success");
      // document.title = 'TextUtils on';
      // setInterval(()=>{                   //for blinking the title but not used mainly
      //   document.title = 'TextUtils offf';
      // },1000)
      // setInterval(() => {
      //   document.title = 'TextUtils onnn';
      // }, 900);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode enabled","success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtilis" aboutText="About-Textutilis"/>  */}
      <Router>
      <Navbar title="TextUtils" aboutText="About-Textutilis" mode={mode} togglemode={togglemode} />
      {/* <Alert alert={alert}/> */}
      <div className="container my-3"> 
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm heading="Enter a text to Analyze" mode={mode} />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
