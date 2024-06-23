import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return( 
    <div className="App"> 
    <div className="container"> 
    
    <Weather defaultCity="Durban" />
    <footer>
      This project was coded by Zama Andile Dlamini & it is {" "}  
      <a href="https://github.com/Andile18/react-weather-app" 
      target="_blank" rel="noreferrer">
        
        open-sourced on Github
        </a>
         </footer>
         </div>
          </div>
  );
}

