const RightHorizontal_mid= (grid:Map<number,Array<string|number >>,id:number,turn: string)=>{
    let fourth = grid.get(4)?.[0];
    let fiveth = grid.get(5)?.[0];
    let sixth = grid.get(6)?.[0];  
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