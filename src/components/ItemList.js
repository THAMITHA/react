import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList = ({items, dummy}) => {
    console.log(dummy)
    const Dispatch = useDispatch();
    const handleAddItem = () =>{
        //Dispatch an action
        Dispatch(addItem("pizza"))
    }
    return <div>
        {items.map(item => 
            <div
            key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹  {item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div><button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute" onClick={handleAddItem}>Add +</button></div>
                <img src={CDN_URL + item.card.info.imageId} />
                </div>
            </div>)}
    </div>
}

export default ItemList