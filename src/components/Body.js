import RestaurantCard from "./RestaurantCard" 
import { useState, useEffect } from "react"
import mockData from "../utils/mockData"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(mockData)

    useEffect(()=>{
        console.log('useEffect called')
    }, [])
    console.log('body render')
    return (
     <div className="body">
         <div className="filter">
            <button className="filter-btn" onClick={()=>{filteredList = listOfRestaurants.filter((res)=> res.info.avgRatingString>4)
            setListOfRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
         </div>
         <div className="res-container">
             {listOfRestaurants.map((restaurant)=><RestaurantCard  key={restaurant.info.id} resData={restaurant}/>)}
         </div>
     </div>
    ) 
 }

export default Body