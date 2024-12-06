import React,{useState,createContext} from "react";
import FChildContext from "./FChildContext";
export const context = createContext();
function FParentContext(){
    const [name,changeName] = useState("vivek");  
    return(
        <context.Provider value={name}>
            <h1>Parent = {name}</h1>
            <FChildContext/>
        </context.Provider>
    )
}
export default FParentContext;