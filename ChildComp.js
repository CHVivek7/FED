import React,{Component} from "react";
class ChildComp extends Component{
    render(){
        return(
            <div>
                <button onClick={this.handleChild}>Send</button>
            </div>
        )
    }
    handleChild = (e) =>{
        this.props.parentHandle("Data from Child");
        e.preventDefault();
    }
}
export default ChildComp;