
const Vertical_right=(grid:Map<number,Array<string|number>>,id: number, turn :string)=>{
    let third = grid.get(3)?.[0];
    let sixth = grid.get(6)?.[0];
    let nineth = grid.get(9)?.[0];     
        if(third==turn && sixth==turn && nineth==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}

export default Vertical_right;