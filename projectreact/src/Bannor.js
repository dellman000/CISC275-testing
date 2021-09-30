import React from "react";
import { useState } from "react";
import './App.css';

const Bannor=(props)=>{
    const RedScore = props.RedScore;
    const BlueScore = props.BlueScore;

    return <div className ="Head">   
    <h1> 
        Tic-Tac-Toe
        Team red: {RedScore}
        Team Blue: {BlueScore}
    </h1>
    
     </div>
}

export default Bannor; 