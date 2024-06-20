import React, { useState } from 'react'

const Search = () => {
    const [qValue, setQValue] = useState('');

    const handleSearch = () => {
        
    }
    return (
        <div>
            <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 md:w-full text-left">
                    <input type="text" name="search-input" value={qValue} onChange={(e) => { setQValue(e.target.value) }}
                        className="w-full bg-gray-100 bg-opacity-50 rounded focus:bg-transparent border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
                        placeholder='Latest News, Articles, Headlines'
                    />
                </div>
                <button onClick={handleSearch} className="inline-flex text-white bg-orange-400 border-0 py-1 px-6 focus:outline-none hover:bg-orange-600 rounded text-md">Search</button>
            </div>
        </div>
    )
}

export default Search