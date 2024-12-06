import React,{Component} from "react";
class Child extends Component{
    constructor(props){
        super(props);
        this.state = {Flag: this.props.flag};
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>click</button>
                {this.state.Flag ? <h1>True</h1> : <h1>False</h1>}
            </div>
        )
    }
    handleClick = () =>{
        this.setState({Flag:!this.state.Flag});
    }
}
export default Child;