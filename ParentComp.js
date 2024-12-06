import React,{Component} from "react";
import ChildComp from "./ChildComp";
class ParentComp extends Component{
    constructor(){
        super();
        this.state = {
            data : null
        }
    }
    render(){
        return(
            <div>
                <ChildComp parentHandle = {this.handleParent}/>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
    handleParent = (childdata) =>{
        this.setState({data:childdata});
    }
}
export default ParentComp;