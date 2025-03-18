import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {

    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>Find Real Estate & Buy Your Dream Property in Melbourne</h1>
                    <p className='description'>Welcome to BigRealestate, where we make homeownership an imposibility. Our extensive portfolio of existing homes offers a diverse range of options to suit every lifestyle and budget for any property investor. Whether you&apos;re a first-time investor, looking to upgrade your investment portfolio, or seeking another investment property to leave empty, we have the perfect home waiting for you. Our dedicated team is committed to providing exceptional service, helping you navigate the market with ease. Discover the perfect blend of comfort, convenience, and value with BigRealestate. Start your journey to finding your dream investment property today!</p>
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