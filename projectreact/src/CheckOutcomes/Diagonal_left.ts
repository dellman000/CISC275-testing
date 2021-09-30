const Diagonal_left=(grid:Map<number,Array<string|number >>,id:number,turn: string)=>{
    let first = grid.get(1)?.[0];
    let fifth = grid.get(5)?.[0];
    let nineth = grid.get(9)?.[0];     
        if(first==turn && fifth==turn && nineth==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}

export default Diagonal_left;