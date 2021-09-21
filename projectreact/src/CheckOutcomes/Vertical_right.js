import Vertical_mid from "./Vertical_mid";

const Vertical_right=(map,id,turn)=>{
    let third = map.get(3)[0];
    let sixth = map.get(6)[0];
    let nineth = map.get(9)[0];     
        if(third==turn && sixth==turn && nineth==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}

export default Vertical_right;