import { LOGO_URL } from "../utils/constants"
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import About from "./About"
import useOnlineStatus from "../utils/useOnlineStatus"

export const Header = ()=>{
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus()
    console.log("header render")
    useEffect(()=>{
        console.log("useEffect called")
    },[btnNameReact])

    return(
        <div className="flex">
            <div className="w-56">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex">
                    <li>online status: {onlineStatus? "✅":"🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )   
}