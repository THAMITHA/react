import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
        console.log(props.name +' Constructor')
    }

    componentDidMount(){
        console.log(this.props.name+' componentDidMount')
    }

    render(){
        console.log(this.props.name+ 'Render')
        const { name, location } = this.props
        const { count} = this.state
        return <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{this.setState({count: count + 1})}}>count</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @thamitha</h4>
        </div>
    }
}

export default UserClass