import React from "react";
import { useState } from "react";
import Bannor from "./Bannor.js";
import CheckVictor from "./CheckOutcomes/CheckVictor.js";
import PlayAgain from "./PlayAgain.js";



/*const log = () => {
    console.log("hello");
}*/



const WinColor=(turn)=>{
    if (turn==="Red"){

        return "PlayGameRed";
    }
    if(turn==="Blue"){
        return"PlayGameBlue";
    }
}

const ShowPlayAgainButton=(turn)=>{
   

if(turn!="gray"){
    return "PlayAgain"
}
else{
    return "PlayAgainNo";
}


}

const ClearMap=(map)=>{
    let x = 1;
    let y = 3;
    
    
    for (let i = 1; i < 10; i++) {
        if (x <= 3) {
            map.set(i, ["gray", [x, y]]);
            x++;
        }
        else if (x >3) {
            x = 1;
            map.set(i, ["gray", [1, y]])
            x++;
        }
        if(i==3||i==6||i==9){
            y--;
        }
    } 
    console.log(map);
    return map;

}

const SaveScoreRed=(RedScore,BlueScore,turn)=>{
if(turn =="Red"){
    return RedScore+1;
}
else{
    return RedScore;
}
}
const SaveScoreBlue=(RedScore,BlueScore,turn)=>{
    if(turn =="Blue"){
        return BlueScore+1;
    }
    else{
        return BlueScore;
    }
    }
    


const RepeatBox = (props) => {
    const notifyScoreUpdate = props.notifyScoreUpdate;
    const [RedScore,SetRedScore]=useState(0);
    const [BlueScore,SetBlueScore]=useState(0);

    let map = new Map();
    let x = 1;
    let y = 3;
    for (let i = 1; i < 10; i++) {
        if (x <= 3) {
            map.set(i, ["gray", [x, y]]);
            x++;
        }
        else if (x >3) {
            x = 1;
            map.set(i, ["gray", [1, y]])
            x++;
        }
        if(i==3||i==6||i==9){
            y--;
        }
    }
    const [colorStates, setColorStates] = useState(map);
    const [turn, setTurn] = useState('Red');
    const [NumberofTurns,SetNumOfTurns]=useState(0);
    const [victor,setVictor] = useState('gray');
    
    //let color = 'gray'
    // let setcolor = () => color = 'red'
    const changecolor = (id) => {
        const newMap = new Map(colorStates);     
        if (newMap.get(id)[0] == 'gray' && turn == 'Red'&& victor =='gray') {
            newMap.set(id, ['Red', [x, y]]);
            setColorStates(newMap);
            let CheckWin= CheckVictor(newMap,id,turn);
            setVictor(CheckWin);
            setTurn('Blue');   
        }
        else if (newMap.get(id)[0] == 'gray' && turn == 'Blue' && victor =='gray') {
            newMap.set(id, ['Blue',[x,y]]);
            setColorStates(newMap);
            let CheckWin= CheckVictor(newMap,id,turn);
            setVictor(CheckWin);
            setTurn('Red');  
        }
      
    }


    const list = [];
    for (let i = 1; i < 10; i++) {
        let TileButton = <div onClick={() => {changecolor(i);  }}  style={{ backgroundColor: colorStates.get(i)[0] }} className="square" id={i}></div>
        list[i] = TileButton;
    }

    let Game = [];

    Game[0] = <div className="tile"> {list} {victor !== 'gray'&& <div className ={WinColor(victor)} >{victor} Wins</div> } <div className = {ShowPlayAgainButton(victor)} onClick ={()=> {
        setColorStates(ClearMap(colorStates)); 
        SetBlueScore(SaveScoreBlue(RedScore,BlueScore,victor));
        SetRedScore(SaveScoreRed(RedScore,BlueScore,victor));
        setTurn("Red");
        setVictor("gray");
        props.notifyScoreUpdate(victor)
    } 
    } ><PlayAgain /> 
    </div> 
    </div>

    return Game;
}

function Box() {
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)

    function handleScoreChange(victor) {
        if (victor === "Red") {
            setRed(red+1)
        } else if (victor === "Blue") {
            setBlue(blue+1)
        }
    }

//<RepeatBox/>

    return <div  >
        <Bannor RedScore={red} BlueScore={blue}/>
        <RepeatBox notifyScoreUpdate={handleScoreChange}/>
    </div>;
}

export default Box;