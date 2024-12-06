import {UserConsumer} from "./UserContext";
import {Component} from "react";
class ConsumerContext extends  Component{
    render() {
        return (
            <UserConsumer>
            {value => <h1>Hello, {value}</h1>}
            </UserConsumer>
        
        );
    }
}
export default ConsumerContext;