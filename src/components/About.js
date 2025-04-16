import User from "./user";
import UserClass from "./UserClass";

const About = (props) => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste web Series</h2>
            <User name={"Thamitha(functional)"}/>
            <UserClass/>
         </div>        
    )
}

export default About;