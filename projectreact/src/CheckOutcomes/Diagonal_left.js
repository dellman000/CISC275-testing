const Diagonal_left=(map,id,turn)=>{
    let first = map.get(1)[0];
    let fifth = map.get(5)[0];
    let nineth = map.get(9)[0];     
        if(first==turn && fifth==turn && nineth==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}

export default Diagonal_left;