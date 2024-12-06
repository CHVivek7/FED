import React,{Component} from "react";
class TitleChange extends Component{
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
        document.title = "This app Change Counter";
    }
    componentDidUpdate(){
        document.title = `Counter is Updated to ${this.state.count}`;
    }
    componentWillUnmount(){
        document.title = "Application is Closing";
    }
}
export default TitleChange;