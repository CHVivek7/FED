import React,{useContext} from "react";
import { context } from "./FParentContext";

function FChildContext1(){
    const name = useContext(context);
    return(
        <h1>Child1 = {name}</h1>
    )
}
export default FChildContext1;