import { useState } from 'react';
import './SearchBar.scss';

const types = ['buy', 'rent'];

function SearchBar() {
    const [query, setQuery] = useState({
        type: 'buy',
        suburb: '',
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (val) => {
        setQuery(prev=>({...prev, type: val}));
    }

    return (
        <div className='searchBar'>
            <div className='type'>
                {types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? 'active' : ''}>
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type='text' name='suburb' placeholder='Suburb' />
                <input type='numeric' name='minPrice' min={0} max={10000000} placeholder='Min Price' />
                <input type='numeric' name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
                <button>
                    <img src='/search.png' alt='search' />
                </button>
            </form>
        </div>
    )
}

export default SearchBar;