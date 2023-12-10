
import globe from './assets/globe.png'

function Header(){
    return (
        <header className="top-header">
            <img className='globe-image' src={globe} alt="white globe" />
            <h1>my travel journal.</h1>
        </header>
    )
}


export default Header