import React from "react";
import { useState } from "react";
import CheckVictor from "./CheckOutcomes/CheckVictor.js";
import PlayAgain from "./PlayAgain.js";



/*const log = () => {
    console.log("hello");
}*/

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
    const [turn, setTurn] = useState('red');
    const [victor,setVictor] = useState('gray');
    
    //let color = 'gray'
    // let setcolor = () => color = 'red'
    const changecolor = (id) => {
        const newMap = new Map(colorStates);     
        if (newMap.get(id)[0] == 'gray' && turn == 'red'&& victor =='gray') {
            newMap.set(id, ['red', [x, y]]);
            setColorStates(newMap);
            let CheckWin= CheckVictor(newMap,id,turn);
            setVictor(CheckWin);
            setTurn('blue');           
        }
        else if (newMap.get(id)[0] == 'gray' && turn == 'blue' && victor =='gray') {
            newMap.set(id, ['blue',[x,y]]);
            setColorStates(newMap);
            let CheckWin= CheckVictor(newMap,id,turn);
            setVictor(CheckWin);
            setTurn('red');            
        }
    }


    const list = [];
    for (let i = 1; i < 10; i++) {
        let TileButton = <div onClick={() => changecolor(i)} style={{ backgroundColor: colorStates.get(i)[0] }} className="square" id={i}></div>
        list[i] = TileButton;
    }
    return <div className="tile"> {list} {victor !== 'gray'&& <div>{victor} wins</div> } <div className = "Tweet" onClick ={()=> {
        setColorStates(ClearMap(colorStates)); 
        setTurn("red");
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