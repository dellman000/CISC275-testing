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

export default Diagonal_right;