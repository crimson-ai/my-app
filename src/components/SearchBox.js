import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search robots'
                onChange={searchChange} // every time there is a change, call the searchChange() function
            />
        </div>
    );
};

export default SearchBox;