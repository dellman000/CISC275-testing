import React,{useState} from 'react'; 
import Hello from'./Sayhello.js';
import Tweet from './Tweet.js';
//import './App.css'


function App(){
const [isRed,setRed]=useState(false);
const [count,setCount]=useState(0);
const Increment=()=>  {
  setCount(count+1);
}
return(
  <div className ="App">
   
    <button onClick={Increment}>Increment</button>
    <h1>{count}</h1>
  </div>
  )

}

export default App;