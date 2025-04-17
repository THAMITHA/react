import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props)
        // console.log('parent constructor called')
    }
    componentDidMount(){
        // console.log('parent componentDidMount called')
    }
    
    render(){
        // console.log('parent render called')
        return(<div>
            <h1>About</h1>
            <h2>This is Namaste web Series</h2>
            <UserClass name= {"first"} location= {"mysore"}/>
        </div>)
    }       
}

export default About;