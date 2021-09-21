import React from "react";
import { useState } from "react";
import RightHorizontal_top from "./CheckOutcomes/RightHorizontal_top.js";
import RightHorizontal_mid from "./CheckOutcomes/RightHorizontal_mid.js";
import RightHorizontal_bot from "./CheckOutcomes/RightHorizontal_bot.js";
import Vertical_left from "./CheckOutcomes/Vertical_left.js";
import Vertical_mid from "./CheckOutcomes/Vertical_mid.js";
import Vertical_right from "./CheckOutcomes/Vertical_right.js";
import Diagonal_left from "./CheckOutcomes/Diagonal_left.js";
import userEvent from "@testing-library/user-event";



/*const log = () => {
    console.log("hello");
}*/
const Diagonal_right=(map,id,turn)=>{
    let third = map.get(3)[0];
    let fifth = map.get(5)[0];
    let seventh = map.get(7)[0];     
        if(third==turn && fifth==turn && seventh==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 

}

const CheckVictor =(map,id,turn)=>{
    let VictorColor ="gray";
    
    if (id==1 ||id ==2|| id==3){
        let x= RightHorizontal_top(map,id,turn);
        if (x == turn){
            VictorColor = x;
        }
    }
    else if(id ==4||id == 5||id ==6){
        let x =RightHorizontal_mid(map,id,turn);
        if (x== turn){
            VictorColor = x;
        }
    }
    else if (id ==7||id == 8||id ==9){
        let x =RightHorizontal_bot(map,id,turn);
        if (x== turn){
            VictorColor = x;
        }
    }

    if(id==1||id == 4 ||id==7){
        let x =Vertical_left(map,id,turn);
        if (x==turn){
            VictorColor =x;
        }
    }
    else if(id==2||id==5||id==8){
        let x = Vertical_mid(map,id,turn);
        if(x==turn){
            VictorColor = x;
        }
    }
    else if(id==3||id==6||id==9){
        let x = Vertical_right(map,id,turn);
        if(x==turn){
            VictorColor = x;
        }
    }

    if(id==1||id == 5 ||id==9){
        let x = Diagonal_left(map,id,turn);
        if (x==turn){
            VictorColor = x;
        }
    }
    else if (id==3||id == 5 ||id==7){
        let x = Diagonal_right(map,id,turn);
        if (x==turn){
            VictorColor = x;
        }
    }
    return VictorColor;
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
           // RightHorizontal_top(newMap,id,turn);
            setTurn('red');            
        }
    }


    const list = [];
    for (let i = 1; i < 10; i++) {
        let TileButton = <div onClick={() => changecolor(i)} style={{ backgroundColor: colorStates.get(i)[0] }} className="square" id={i}></div>
        list[i] = TileButton;
    }
    return <div className="tile"> {list} {victor!=='gray'&&<div>{victor} wins</div>} </div>;
}

function Box() {
    return <div className="tile">
        <RepeatBox />
    </div>;
}

export default Box;