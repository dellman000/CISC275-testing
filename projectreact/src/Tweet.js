import React from "react";
import './App.css';

function Tweet(props){
    
    return(
    
    <div className="Tweet">
        <h3> {props.name}</h3>
        <p>{props.message}</p>
        <h3>Likes: {props.likes} </h3>
    </div>
    )
}
export default Tweet;