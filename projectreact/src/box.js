import React from "react";
import { useState } from "react";
import CheckVictor from "./CheckOutcomes/CheckVictor.js";
import PlayAgain from "./PlayAgain.js";



/*const log = () => {
    console.log("hello");
}*/

const WinColor=(turn)=>{
    if (turn=="Red"){
        return "PlayGameRed";
    }
    if(turn=="Blue"){
        return"PlayGameBlue";
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

const RepeatBox = () => {
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
    return <div className="tile"> {list} {victor !== 'gray'&& <div className ={WinColor(victor)} >{victor} wins</div> } <div className = "Tweet" onClick ={()=> {
        setColorStates(ClearMap(colorStates)); 
        setTurn("Red");
        setVictor("gray");
    } 
    } ><PlayAgain /> 
    </div> </div>;
}

function Box() {
    return <div className="tile">
        
        <RepeatBox />
        
        
    </div>;
}

export default Box;