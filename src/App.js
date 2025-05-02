import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
const About = lazy(()=>import("./components/About"))
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


//Chunking
//Code Splitting
//Dynamic Bundling
//lazy loading
//on demand loading
//dynamic import

const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () => {
    const [userName, setUserName] = useState()
    
    //authentication
    useEffect(()=>{
        // make an api call and send username and password
        const data = {name: "Thamitha"}
        setUserName(data.name)
    }, 
    [])
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
            <UserContext.Provider value={{loggedInUser: "Pooja"}}>
                <Header/>   
            </UserContext.Provider>
            <Outlet />  
        </div>  
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)

