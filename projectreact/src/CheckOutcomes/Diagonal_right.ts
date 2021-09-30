const Diagonal_right=(grid:Map<number,Array<string|number >>,id:number,turn: string)=>{
    let third = grid.get(3)?.[0];
    let fifth = grid.get(5)?.[0];
    let seventh = grid.get(7)?.[0];     
        if(third==turn && fifth==turn && seventh==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 

}

export default Diagonal_right;