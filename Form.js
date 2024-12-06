import React,{Component} from "react";
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {name:"",subjet:"React"};
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleName}/>
                    </label>
                    <br/>
                    <label>
                        Subject:
                        <select value={this.state.subject} onChange={this.handleSubject}>
                            <option>select</option>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
    handleName = (e) =>{
        this.setState({name:e.target.value});
    };
    handleSubject = (e) =>{
        this.setState({subject:e.target.value});
    };
    handleSubmit = (event) =>{
        alert(`Name: ${this.state.name} \nSubject: ${this.state.subject}`);
        event.preventDefault();
    };
}
export default Form;