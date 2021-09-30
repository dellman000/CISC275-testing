
const RightHorizontal_top= (grid:Map<number,Array<string|number >>,id:number,turn: string)=>{
    let first = grid.get(1)?.[0];
    let second = grid.get(2)?.[0];
    let third = grid.get(3)?.[0];  
    if (id==1 ||id ==2|| id==3){
        if(first==turn && second==turn && third==turn){
            //console.log("first: "+first +" second: "+ second +",third: "+third);
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
export default RightHorizontal_top;