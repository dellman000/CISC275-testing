const Vertical_left=(map,id,turn)=>{
    let first = map.get(1)[0];
    let fourth = map.get(4)[0];
    let seventh = map.get(7)[0];     
        if(first==turn && fourth==turn && seventh==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}

export default Vertical_left;