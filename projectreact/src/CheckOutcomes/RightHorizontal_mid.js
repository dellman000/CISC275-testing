const RightHorizontal_mid= (map,id,turn)=>{
    let fourth = map.get(4)[0];
    let fiveth = map.get(5)[0];
    let sixth = map.get(6)[0];  
    console.log(turn);
    if (id==4 ||id ==5|| id==6){
        if(fourth==turn && fiveth==turn && sixth==turn){
            console.log("4: "+fourth +" 5: "+ fiveth +",6: "+sixth);
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
export default RightHorizontal_mid;