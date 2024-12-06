import React,{Component} from "react";
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count:0};
    }
    render(){
        return(
            <div>
                <button onClick={this.handleCount}>count = {this.state.count}</button>

            </div>
        );
    }
    handleCount = () =>{
        this.setState({count : this.state.count+1})
    };
}
export default Counter; 