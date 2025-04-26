import {Component} from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
            <h1>About Class Component</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser})=><h1 className="text-xl font-bold">loggedInUser</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste web Series</h2>
            <UserClass name= {"first"} location= {"mysore"}/>
        </div>)
    }       
}

export default About;