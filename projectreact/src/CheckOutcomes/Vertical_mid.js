const Vertical_mid=(map,id,turn)=>{
    let second = map.get(2)[0];
    let fifth = map.get(5)[0];
    let eight = map.get(8)[0];     
        if(second==turn && fifth==turn && eight==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}
export default Vertical_mid; 