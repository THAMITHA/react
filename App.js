import React from "react"
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAA21BMVEXy8vLyGgXzvQbz8fPz8vD3AAfvfQrvdA3x8/HyIQfsAADwAADnAADpYxDy8/bzFAXwPwrzowvsbA/2qg/4lBn3ixzytAD0sQDuRQv0wgXu3rPxui/1+vrwIiDqqKX37+3ofHjy4azz2trmQ0TxGxjihYHz4+LqubfplpLaAADvysfz1M/kODf339rZKiPwtrPiWFTpcG3uhYTz5sPy3JLoZmLqMjLgFxThIiHtURXvmxDnWA7jmpbpdXfsUEzkMw707dfwzHHz04Trwk/wzGLyxEbv1pf4qaX28+feg2iEAAAHXklEQVR4nO2be1fjNhOHnVj0FZZX3l2osyXCJlfnAjjUIWS3WeqEJG++/yfqjGxyISxs2z9s9cxzOI5zO0c/ZjQXSbEsgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCI/yr8+VHlcGnvv24eXLFmFMx6vVkQNZnSQgxVo9TN7L41uWwDl5PWfXCjlJlamKW6neu28J4Ron3d6aqix/WPUGz2ILxKpeLhBR8rFSEmgW2YHNtittW8c3MVW1COe3eDgcAcZ7Mtmw8fReVVRGuoZNEj/DvYajgVL+3ybB5xO1Ss6BH+DdRN6wd2yWxjVBgI735kl0zNXWiEGp3krZmz51UQzQRo83b6PHdmghim88uwtTfuDx+9069fT8WXz7vohkEAw0TRw30HHXI7O8OcfKj+4n789O2j+6v/x8n2ZbfDuMXLLgb+21JH5dwKJ5+rv7pfzj59dM+rH3IxmG4eh6r0UtB31GznT97J59+OxIAaM2aNbfHw+84wh5bZC9fO95BbZc+dEqb/fu5/1TKVzM+KHuv72Cqaeu+L8aaRMqA+44H7M2LcgJc+mtncmv2cmJnOSmWGM4v13Ir3rpiK22OldzOuxbxvGRPEwPhAzJ6bOZ+r530U03/pZj1W+tAMcl4EgGrt/Fu1+u28dhQAih7qe8CUVtHlYQCoVqu+D5ffDsRcRuWvZzhTg11jBnXLl09nZz5wdvbtz30xjwNV9qpZMsa793sVgOe5LkwXKJ3dg/UN567LSx+a0TY9p7KPd/pLtfq/yiFOr/zVDAfXUYNrr7JvhSMx0Hpeg5eVvQLQw2OdQyu8IqbSKbmLbVHDa/GWGDTMsPTTH8Ehqo73lpuBE3ZwxpQ+0Wjkza14Q0zFu70pffJ/hnE1e0MMeJkBoWwLs8L9pHLkZv1QmuFiALNtFYgfixGBKntU3gFiONubNS/EiFvGTQnMiM1UvHO0F2LcGAxjjJtZGAPC0XZt+VCMGIWWKWE5h1k70xyI8dzYMiFfHsC7d84rYjyRlcuGyeHxgzgWIx5is1wsp3vleEdinKuuiVqgf54cicGFzKLH9Q+AXAOmeSnGuQpNNAznNnRp4lCM7slMSpjP4I5gR8+arRjP6TBzCplDeG6aTIyXG8ZQMRZn2e7mH+fnX7ElQ8MwE71MAw00rm04p6eoxYNm2TaqKjvAVr38YJOHF5N6sleQ3el22cmbdI1pll9HbQ9reI4JG8xvAa1AP6/QoFk2qic7ApowFbjZupMbKGlqWNZA7OJ2Sx8LEK3y7y29B5gmdrOeTDEji/8tHNc2QtziEPdGVphH8EFfiH7ES79V/lOEvdGoF5Z+b+knYc2mDcHgvyGGq/ycjNGheQ9uwopMHqOgtM9muK3/JNyiVzFLcvtYhK2/hlcdrm2uv1W0G3IcFI5cQraXmBXx7KUWYeXjw23Og3FmSiw7k41P8Qu8+MitB4bJhOejtqBkgZkuGagDYNbDm/JgtmiBEi/6W0yfts9NVTAM4HixpGT6CUhgXN9nO+mMbQ7aS6nPC9v6nwCfRDVMu2LRxpHpYr6cz5fLRSqttLF8mjdSPd5ksXxaJBsuE3hzvrjYbOXwsNfDJzz6HegMQtXs4V1wU5iKHHlRx7MkNd9vWMmTvntKYFqv9cv+eCPHNf3qMnn+CnQ4/VjhuVRHOI7j9lh0CY/CfRwUqQQBMfUnYJmkS99fLVe+v0xlA0Ut6351bIGY1aru11YpOhH+3OlRiFEoUUx7NJqIhziaitb9o6uX1IsELbNIkc0aZCTpBUhap/qSNlZ+PR3X6o30Yu77C0sfyVCztue1A2WFV851sxlNnU48cYLm8M7BhaiixSzH63Ui07lfT6SUycqfN+r+nEE8AH0XICaR6IKrFKO16o7EQxtMw0FMS6mw5fweTNxIqcCZFL0OredM1Z8rsMYcw9dmXlsu6rUGhGZQWluPUaPFF76fiQkexOzqZBorEDOdBVdtpxdPxFUwa4nHElgGWfB0WVticsnE+Gtp2fhmLmYz96sbzC3de9GP/w/zI4Q5411eeuJ6EE299mVbOJ2wUC3ZnEmSZCNhuL52s3ptAW622ki5Wfi1ZI1upsBGTxiPJe5AgQRvErErx3Nc9zpS8dRzXbdftBYtpgESpM0a9Vp9nYzBUhcbCNJPSQLyVgzmzLgBpoKPMYl7g24fcJzv3e/iNhrchArEOL0B5Juiu+pMDHTHFpimWqthxplv0Dza++oNNa4B6IiY6K3YFZ0QuBOTGKIZVA2co5hIQfpnBZcz8mLlN7JDZlAM4PypYy0gkye4r68aXGL6rNdX441em4kfJgMQYA0eJnGvPdJ1jIpaDwOrBK2b3Fxg/ZIVz5tkDUFaj1qmjfW6kUJ83uBNI2FQrEE5GcaRnhnwyJrBQNepvBvFIS9DV43zhe3usdy0s3uwlcw/IGW2ZMbxt9vZDTwq9RyJs0a08JqZIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjiX/MXFqrGMOaUJFMAAAAASUVORK5CYII="/>
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

const resObj = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1003414",
    "name": "Pizza Hut",
    "cloudinaryImageId": "dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    "locality": "Chhindwara",
    "areaName": "Parasia Road",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas","burger","finger-chips"
    ],
    "avgRating": 4.1,
    "parentId": "721",
    "avgRatingString": "4.1",
    "totalRatingsString": "51",
    "sla": {
    "deliveryTime": 47,
    "lastMileTravel": 13.8,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
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
    "context": "seo-data-4bb6f42f-aba5-4edc-a32a-9402487320ae"
    },
    "cta": {
    "link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }

const RestaurantCard = (props) =>{
    const {resData} = props
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
        <img className= "res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/"+ resData.info.cloudinaryImageId}/>    
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRatingString} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}

const Body = () => {
   return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard resData={resObj}/>
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

