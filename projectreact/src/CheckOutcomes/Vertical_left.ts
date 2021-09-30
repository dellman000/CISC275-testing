const Vertical_left=(grid:Map<number,Array<string|number >>,id:number,turn: string)=>{
    let first = grid.get(1)?.[0];
    let fourth = grid.get(4)?.[0];
    let seventh = grid.get(7)?.[0];     
        if(first==turn && fourth==turn && seventh==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}

export default Vertical_left;