import React from "react";

const RightHorizontal_top= (map,id,turn)=>{
    let first = map.get(1)[0];
    let second = map.get(2)[0];
    let third = map.get(3)[0];  
    if (id==1 ||id ==2|| id==3){
        if(first==turn && second==turn && third==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        }
    }
    else{
        return "gray";
    }

}
export default RightHorizontal_top;