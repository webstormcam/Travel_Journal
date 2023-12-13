
import pin from "./assets/pin.png"

function Country(props){
    return (
        
    <>
        <div className="country">
            <img className="photo" src={props.imageUrl} alt="a Picture of Mount Fuji" />
            <div className="details">
                <div className="google-info">
                    <div className="google-1">
                        <img src={pin} alt="orange pin" />
                        <h3>{props.location}</h3>
                    </div>
                    <div className="google-2">
                        <a className="google-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                </div>
                <h2>{props.title}</h2>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="story">{props.description}</p>
            </div>
        </div>
       
      
       
    </>
    )
}


export default Country