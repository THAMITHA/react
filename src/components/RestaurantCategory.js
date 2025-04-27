import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {
    console.log('data', data.itemCards)
    const handleClick = () =>{
        setShowIndex()
    }
    return( 
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>

            {showItems && <ItemList items = {data.itemCards} dummy = {dummy}/>}
        </div>
    </div>
    )
}

export default RestaurantCategory