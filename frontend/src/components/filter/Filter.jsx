import './Filter.scss';

function Filter() {
    return (
        <div className='filter'>
            <h1>Search results for <b>Melbourne</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="suburb">Location</label>
                    <input type="text" id="suburb" name="suburb" placeholder="Suburb Location"/>
                </div>
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="Condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="numerical" id="minPrice" name="minPrice" placeholder="Any"/>
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="numerical" id="minPrice" name="minPrice" placeholder="Any"/>
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="numerical" id="bedroom" name="bedroom" placeholder="Any"/>
                </div>
                <button>
                    <img src='./search.png' alt='search'/>
                </button>
            </div>
        </div>
    )
}

export default Filter;