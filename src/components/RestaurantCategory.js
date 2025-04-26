import ItemList from "./ItemList"

const RestaurantCategory = ({data}) => {
    console.log('data', data.itemCards)
    return( 
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex ">
        <div className="justify-between">
            {/* header */}
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            {/* Accordion Body */}
            <ItemList items = {data.itemCards}/>
        </div>
    </div>
    )
}

export default RestaurantCategory