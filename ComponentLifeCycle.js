import React,{Component} from "react";
class ComponentLifeCycle extends Component{
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
    componentDidMount(){
        console.log("Component is Mounted");
    }
    shouldComponentUpdate(){
        console.log("Component is going to Update");
        return true;
    }
    componentDidUpdate(){
        console.log("Component is updated");
    }
    componentWillUnmount(){
        console.log("Component is going to Unmount");
    }
}
export default ComponentLifeCycle;