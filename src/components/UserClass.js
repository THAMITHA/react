import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
        // console.log(props.name +' Constructor')
    }

    async componentDidMount(){
        setInterval(()=>{
            console.log('namaste react op')
        },1000)
        // console.log(this.props.name+' componentDidMount')
        const data = await fetch("https://api.github.com/users/thamitha")
        const json = await data.json()
        console.log(json)

        this.setState({
           userInfo: json 
        })
    }

    componentDidUpdate(){
        console.log('component did update')
    }
    
    componentWillUnmount(){
        console.log('component will unmount')
    }
    render(){
        // console.log(this.props.name+ 'Render')
        const { name, location, avatar_url} = this.state.userInfo
        return <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @thamitha</h4>
        </div>
    }
}

export default UserClass