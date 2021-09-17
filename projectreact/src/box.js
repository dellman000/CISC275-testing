import React from "react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";



const log=()=>  {
    console.log("hello");
  }

  


const RepeatBox=()=> {
    let map= new Map(); 
    let x = 1;
    let countX=0;
    let y = 3;
    let countY=0;
    for(let i =1;i<10;i++){
      
        map.set(i,"gray",[x,y]); 
    }
   const[colorStates,setColorStates]=useState(map);
   const[turn,setTurn]=useState('red');

   //let color = 'gray'
  // let setcolor = () => color = 'red'

  const changecolor=(id)=>  {
      const newMap = new Map(colorStates)
    if(newMap.get(id)=='gray' && turn=='red' ){
        newMap.set(id, 'red')
        setColorStates(newMap);
        setTurn('blue');
    }
    else if(newMap.get(id)=='gray'&& turn =='blue' ){
        newMap.set(id, 'blue')
        setColorStates(newMap);
        setTurn('red');
    }
    
  }


    const list = [];
    for(let i=1;i<10; i++){
        let TileButton = <div onClick = {() => changecolor(i)} style={{backgroundColor: colorStates.get(i)}} className="square" id={i}></div>
       list[i]=TileButton;
       
    }
   
    return <div className="tile"> {list}</div> ;
}

function Box(){

    
return <div className ="tile">
    <RepeatBox/>
</div>;

}

export default Box;