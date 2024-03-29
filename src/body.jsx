import Country from "./country.jsx"
import data from "./data.js"
function Body(){
    const places = data.map(item =>{
        return (
                 <Country
                    key ={item.key}
                    title = {item.title}
                    alt ={item.alt}
                    location = {item.location.toUpperCase()}
                    description ={item.description}
                    googleMapsUrl = {item.googleMapsUrl}
                    imageUrl ={item.imageUrl}
                    startDate ={item.startDate}
                    endDate ={item.endDate}
                 />
        )
    })

    return (
        <main>
            {places}
        </main>
    )
    
}


export default Body