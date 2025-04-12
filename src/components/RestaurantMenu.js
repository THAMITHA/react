import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9564868&lng=77.6420348&restaurantId=661411&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        console.log('pleasecheck', json)
        setResInfo(json.data)
    }
    if(resInfo == null) return  <Shimmer/>
    const { name, cuisines, costForTwoMessage} = resInfo.cards[2].card.card.info 
    return ( 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h3>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;