import React,{Component} from "react";
class PropsDemo1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Props Demo</h1>
                <p>Name: {this.props.name}</p>
                <p>Surname: {this.props.surname}</p>
            </div>
        );
    }
}
export default PropsDemo1;