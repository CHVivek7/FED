import React,{useState} from "react";
function Fcounter(){
    const [count,setCount] = useState(0);
    const handleCount = () => {setCount(count+1)}
    return(
        <div>
            <button onClick={handleCount}>+</button>
            <p>{count}</p>
        </div>
    )
}
export default Fcounter;