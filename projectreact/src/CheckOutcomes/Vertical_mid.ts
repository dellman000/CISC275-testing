const Vertical_mid=(grid:Map<number,Array<string|number>>,id: number, turn :string)=>{
    let second = grid.get(2)?.[0];
    let fifth = grid.get(5)?.[0];
    let eight = grid.get(8)?.[0];     
        if(second==turn && fifth==turn && eight==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
            return turn;
        }
        else{
            return "gray";
        } 
}
export default Vertical_mid; 