//import RightHorizontal_top from "./RightHorizontal_top.js";
//import RightHorizontal_mid from "./RightHorizontal_mid.js";
//import RightHorizontal_bot from "./RightHorizontal_bot.js";
//import Diagonal_left from "./Diagonal_left.js";
//import Diagonal_right from "./Diagonal_right.js";
//import Vertical_left from "./Vertical_left.js";
//import Vertical_mid from "./Vertical_mid.js";
//import Vertical_right from "./Vertical_right.js";
import RightHorizontal_top from "./RightHorizontal_top.ts";
import RightHorizontal_mid from "./RightHorizontal_mid.ts";
import RightHorizontal_bot from "./RightHorizontal_bot.ts";
import Vertical_left from "./Vertical_left.ts";
import Vertical_mid from "./Vertical_mid.ts";
import Vertical_right from "./Vertical_right.ts";
import Diagonal_left from "./Diagonal_left.ts";
import Diagonal_right from "./Diagonal_right.ts";


const CheckVictor =(map,id,turn)=>{
    let VictorColor ="gray";
    
    if (id==1 ||id ==2|| id==3){
        let x= RightHorizontal_top(map,id,turn);
        if (x == turn){
            VictorColor = x;
        }
    }
    else if(id ==4||id == 5||id ==6){
        let x =RightHorizontal_mid(map,id,turn);
        if (x== turn){
            VictorColor = x;
        }
    }
    else if (id ==7||id == 8||id ==9){
        let x =RightHorizontal_bot(map,id,turn);
        if (x== turn){
            VictorColor = x;
        }
    }

    if(id==1||id == 4 ||id==7){
        let x =Vertical_left(map,id,turn);
        if (x==turn){
            VictorColor =x;
        }
    }
    else if(id==2||id==5||id==8){
        let x = Vertical_mid(map,id,turn);
        if(x==turn){
            VictorColor = x;
        }
    }
    else if(id==3||id==6||id==9){
        let x = Vertical_right(map,id,turn);
        if(x==turn){
            VictorColor = x;
        }
    }

    if(id==1||id == 5 ||id==9){
        let x = Diagonal_left(map,id,turn);
        if (x==turn){
            VictorColor = x;
        }
    }
    else if (id==3||id == 5 ||id==7){
        let x = Diagonal_right(map,id,turn);
        if (x==turn){
            VictorColor = x;
        }
    }
    return VictorColor;
}

export default CheckVictor;