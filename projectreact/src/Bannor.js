import React from "react";
import { useState } from "react";
import './App.css';

const Bannor=(props)=>{
    const RedScore = props.RedScore;
    const BlueScore = props.BlueScore;

    return <div className ="Head">   
    <h1> 
        Tic-Tac-Toe
        <h2 >
       <dt className ="PlayGameRed">  Team Red: {RedScore}</dt>
       <dt className="PlayGameBlue" >  Team Blue: {BlueScore}</dt>
       
    </h2>
        
    </h1>
   
    
     </div>
}

export default Bannor; 