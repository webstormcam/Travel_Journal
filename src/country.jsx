import fuji from "./assets/Fuji.png"
import pin from "./assets/pin.png"
function Country(){
    return (
    <>
        <div className="country">
            <img className="photo" src={fuji} alt="a Picture of Mount Fuji" />
            <div className="details">
                <div className="google-info">
                    <div className="google-1">
                        <img src={pin} alt="orange pin" />
                        <h3>JAPAN</h3>
                    </div>
                    <div className="google-2">
                        <a className="google-maps" href="#">View on Google Maps</a>
                    </div>
                </div>
                <h2>Mount Fuji</h2>
                <p className="dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="story">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
        <div className="country">
            <img className="photo" src={fuji} alt="a Picture of Mount Fuji" />
            <div className="details">
                <div className="google-info">
                    <div className="google-1">
                        <img src={pin} alt="orange pin" />
                        <h3>JAPAN</h3>
                    </div>
                    <div className="google-2">
                        <a className="google-maps" href="#">View on Google Maps</a>
                    </div>
                </div>
                <h2>Mount Fuji</h2>
                <p className="dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="story">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
        <div className="country">
            <img className="photo" src={fuji} alt="a Picture of Mount Fuji" />
            <div className="details">
                <div className="google-info">
                    <div className="google-1">
                        <img src={pin} alt="orange pin" />
                        <h3>JAPAN</h3>
                    </div>
                    <div className="google-2">
                        <a className="google-maps" href="#">View on Google Maps</a>
                    </div>
                </div>
                <h2>Mount Fuji</h2>
                <p className="dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="story">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    </>
    )
}


export default Country