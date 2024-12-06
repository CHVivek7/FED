import { useEffect } from "react";
import React,{useState} from "react";
function F_Count_Flag(){
    const [count,setCount]=useState(0);
    const [flag,setFlag]=useState(true);
    useEffect(()=>{setCount(count+1)},[flag]);
    return(
        <div>
            <button onClick={()=>{setFlag(!flag)}}>{flag.toString()}</button>
            <h1>Count = {count}</h1>
        </div>
    );
}
export default F_Count_Flag;