

const RightHorizontal_bot=(grid:Map<number,Array<string|number >>,id:number,turn: string)=>{
    let seventh = grid.get(7)?.[0];
    let eighth = grid.get(8)?.[0];
    let nineth = grid.get(9)?.[0];  
    console.log(turn);
        if(seventh==turn && eighth==turn && nineth==turn){
            //console.log("4: "+fourth +" 5: "+ fiveth +",6: "+sixth);
            return turn;
        }
        else{
            return "gray";
        }
    
    
}

export default RightHorizontal_bot;