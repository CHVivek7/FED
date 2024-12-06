import React from "react";
function PropsDemo(Props){
    return(
        <div>
            <h1>Props Demo</h1>
            <p>Name: {Props.name}</p>
            <p>Age: {Props.age}</p>
        </div>
    );
}
export default PropsDemo;