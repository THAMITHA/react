import { LOGO_URL } from "../utils/constants"
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import About from "./About"
export const Header = ()=>{
    const [btnNameReact, setBtnNameReact] = useState("Login")
    console.log("header render")
    useEffect(()=>{
        console.log("useEffect called")
    },[btnNameReact])

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )   
}