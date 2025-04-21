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
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="w-56">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">online status: {onlineStatus? "✅":"🔴"}</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4"><Link to={"/cart"}>Cart</Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )   
}