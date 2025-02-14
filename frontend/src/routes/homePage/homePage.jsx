import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>Find Real Estate & Buy Your Dream Home in Melbourne</h1>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <SearchBar/>
                    <div className='boxes'>
                        <div className='box'>
                            <h1>17+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className='box'>
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className='box'>
                            <h1>12,000+</h1>
                            <h2>Rents Raised</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imageContainer'>
                <img src="/bg.png" alt="bg" />
            </div>
        </div>
    )
}

export default HomePage