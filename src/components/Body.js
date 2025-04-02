import RestaurantCard from "./RestaurantCard" 
import { useState } from "react"
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([
        {
            type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {"id": "1003414",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
            "cuisines": [
            "Pizzas"
            ],
            "avgRatingString": "3.1",
            sla:{
            "deliveryTime": 56,
            }
            }   
        },
        {
            type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {"id": "1003514",
            "name": "Dominos",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
            "cuisines": [
            "Pizzas"
            ],
            "avgRatingString": "4.5",
            sla:{
            "deliveryTime": 56,
            }
            }   
        },
        {
            type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {"id": "1003534",
            "name": "MCD",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
            "cuisines": [
            "Pizzas"
            ],
            "avgRatingString": "4.1",
            sla:{
            "deliveryTime": 56,
            }
            }   
        }
        ] )
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