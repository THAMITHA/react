import RestaurantCard from "./RestaurantCard" 
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async() => {
        //fetch will return promise
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
    }

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) return <h1>looks like you're offline!! please check your internet connection</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
     <div className="body">
         <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange = {(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                    console.log(searchText)
                    const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurant(filteredRestaurant)
                }}>search</button>
            </div>
            <button className="filter-btn" onClick={()=>{filteredList = listOfRestaurants.filter((res)=> res.info.avgRatingString>4)
            setListOfRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
         </div>
         <div className="res-container">
             {filteredRestaurant.map((restaurant)=>
             <Link 
             key={restaurant.info.id} 
             to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)}
         </div>
     </div>
    ) 
 }

export default Body