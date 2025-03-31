import React from "react"
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )   
}

const resList = [
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1003414",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
"locality": "Chhindwara",
"areaName": "Parasia Road",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.1,
"parentId": "721",
"avgRatingString": "4.1",
"totalRatingsString": "51",
"sla": {
"deliveryTime": 56,
"lastMileTravel": 13.8,
"serviceability": "SERVICEABLE",
"slaString": "55-60 mins",
"lastMileTravelString": "13.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-03-31 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹64"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "769851",
"name": "Healthy Bites",
"cloudinaryImageId": "4dfbe240cf1a2be01e6f2805c75c4279",
"locality": "Collectrate Road",
"areaName": "Chhindwara City",
"costForTwo": "₹250 for two",
"cuisines": [
"Salads"
],
"veg": true,
"parentId": "3143",
"avgRatingString": "--",
"sla": {
"deliveryTime": 54,
"lastMileTravel": 11.3,
"serviceability": "SERVICEABLE",
"slaString": "50-55 mins",
"lastMileTravelString": "11.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-03-31 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "5.0",
"ratingCount": "<3"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/healthy-bites-collectrate-road-chhindwara-city-rest769851",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "234875",
"name": "Adil Hotel",
"cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
"locality": "Rautha Wada",
"areaName": "Chhindwara Locality",
"costForTwo": "₹150 for two",
"cuisines": [
"North Indian",
"Biryani",
"Tandoor"
],
"avgRating": 4.3,
"parentId": "27123",
"avgRatingString": "4.3",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 11.5,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "11.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-04-01 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "150602",
"name": "Raimens Cafe 79",
"cloudinaryImageId": "eohdm5sdnq6e2u46xeux",
"locality": "Teacher's Colony",
"areaName": "VIP Road",
"costForTwo": "₹250 for two",
"cuisines": [
"Bakery",
"Pizzas",
"Snacks",
"Beverages"
],
"avgRating": 4.4,
"veg": true,
"parentId": "164782",
"avgRatingString": "4.4",
"totalRatingsString": "4.2K+",
"sla": {
"deliveryTime": 54,
"lastMileTravel": 12.5,
"serviceability": "SERVICEABLE",
"slaString": "50-55 mins",
"lastMileTravelString": "12.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-03-31 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/raimens-cafe-79-teachers-colony-vip-road-rest150602",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "898041",
"name": "Thikana",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
"locality": "RANGLA PUNJAB PARASIA ROAD",
"areaName": " ADARSH NAGAR CHHINDWARA",
"costForTwo": "₹250 for two",
"cuisines": [
"Indian"
],
"avgRating": 4.2,
"parentId": "215738",
"avgRatingString": "4.2",
"totalRatingsString": "43",
"sla": {
"deliveryTime": 53,
"lastMileTravel": 13.6,
"serviceability": "SERVICEABLE",
"slaString": "50-55 mins",
"lastMileTravelString": "13.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-03-31 23:45:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹50 OFF",
"subHeader": "ABOVE ₹199",
"discountTag": "FLAT DEAL"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "151649",
"name": "Hotel Sai Nath & Sai Restaurant",
"cloudinaryImageId": "vkhcohhmqfczycw9vsar",
"locality": "railway station",
"areaName": "Chhindwara Locality",
"costForTwo": "₹200 for two",
"cuisines": [
"North Indian",
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
"avgRating": 4.3,
"veg": true,
"parentId": "101802",
"avgRatingString": "4.3",
"totalRatingsString": "980",
"sla": {
"deliveryTime": 49,
"lastMileTravel": 10.3,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "10.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-03-31 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "151518",
"name": "Bakery World",
"cloudinaryImageId": "mt2aggiscfl3yviatwng",
"locality": "Parasia Road",
"areaName": "Parasia Road",
"costForTwo": "₹250 for two",
"cuisines": [
"Bakery",
"Ice Cream",
"Snacks",
"Beverages"
],
"avgRating": 4.3,
"veg": true,
"parentId": "40363",
"avgRatingString": "4.3",
"totalRatingsString": "261",
"sla": {
"deliveryTime": 44,
"lastMileTravel": 11.7,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "11.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-03-31 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "151661",
"name": "Bharat Mewad Ice Cream",
"cloudinaryImageId": "auczcmkdvvxzt2mswvcc",
"locality": "Teacher's Colony",
"areaName": "Chhindwara Locality",
"costForTwo": "₹250 for two",
"cuisines": [
"Ice Cream",
"Desserts",
"Beverages"
],
"avgRating": 4.5,
"veg": true,
"parentId": "44378",
"avgRatingString": "4.5",
"totalRatingsString": "461",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 10.9,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "10.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-03-31 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-fac5fc31-9106-4bd5-abc2-a61cba2a08e4"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/bharat-mewad-ice-cream-teachers-colony-chhindwara-locality-rest151661",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]

const RestaurantCard = (props) =>{
    const { resData } = props
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData.info
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
        <img className= "res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+ cloudinaryImageId }/>    
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
        </div>
    )
}

const Body = () => {
   return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resList.map(restaurant=><RestaurantCard  key={restaurant.info.id} resData={restaurant}/>)}
        </div>
    </div>
   ) 
}
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>    
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

