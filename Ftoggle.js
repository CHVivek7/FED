import React,{useState} from "react";
import { useEffect } from "react";
function Ftoggle(){
    const [flag,setFlag]=useState(true);
    useEffect(()=>{console.log("Component did mount")});
    return(
        <div>
            <button onClick={()=>{setFlag(!flag)}}>{flag.toString()}</button>
        </div>
    );
}
export default Ftoggle;