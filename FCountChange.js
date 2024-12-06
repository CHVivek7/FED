import React,{useState} from "react";
function FCountChange(){
    const [count,setCount] = useState(0);
    const handleCount = () => {setCount(count+1)}
    return(
        <div>
            <button onClick={handleCount}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <p>{count}</p>
        </div>
    )
}
export default FCountChange;