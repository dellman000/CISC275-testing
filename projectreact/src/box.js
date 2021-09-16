import React from "react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";



const log=()=>  {
    console.log("hello");
  }

  


const RepeatBox=()=> {
    let map= new Map(); 
    for(let i =1;i<10;i++){
        map.set(i,"gray");
    }
   const[colorStates,setColorStates]=useState(map);
   //let color = 'gray'
  // let setcolor = () => color = 'red'
  const changecolor=(id)=>  {
      const newMap = new Map(colorStates)
    if(newMap.get(id)=='gray' ){
        newMap.set(id, 'red')
        setColorStates(newMap);
    }
    else{
        newMap.set(id,'gray');
        setColorStates(newMap);
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