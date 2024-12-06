import React,{useRef,useEffect,useState} from "react";
function UseRef1(){
    const prevcount = useRef(0);
    const [count,setCount] = useState(0);
    useEffect(()=>{
        prevcount.current = count;
    },[count])
    return(
        <div>
            <h1>current state value = {count}</h1>
            <h1> previous state value = {prevcount.current}</h1>
            <button onClick={()=>setCount(count+1)}>Count++</button>
        </div>
    )
}
export default UseRef1;