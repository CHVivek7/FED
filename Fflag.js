import React,{useState} from "react";
function Fflag(){
    const [flag,setFlag]=useState("true");
    
    return(
        <div>
            <button onClick={()=>{setFlag(!flag)}}>{flag.toString()}</button>
            
        </div>
    );
}
export default Fflag;