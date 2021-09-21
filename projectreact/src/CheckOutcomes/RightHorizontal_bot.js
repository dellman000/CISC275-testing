import RightHorizontal_mid from "./RightHorizontal_mid";

const RightHorizontal_bot=(map,id,turn)=>{
    let seventh = map.get(7)[0];
    let eighth = map.get(8)[0];
    let nineth = map.get(9)[0];  
    console.log(turn);
        if(seventh==turn && eighth==turn && nineth==turn){
            //console.log("4: "+fourth +" 5: "+ fiveth +",6: "+sixth);
            return turn;
        }
        else{
            return "gray";
        }
    
    
}

export default RightHorizontal_bot;