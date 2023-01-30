import React, { useState, useRef } from 'react';

import React from 'react'

const SearchProduct = () => {

    const isValid = (e) => { // search validation
        e.preventDefualt();
        e.target.search.value.length > 0 && searchHandler(e.target.search.value);
    }

    const searchHandler = async (product_Name) => {
        try {
            const res = await axios.post('http://localhost:3000/product',
                { product_name: product_name });

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={isValid} className='' >
            <div className="search-box">
                <input
                    type='search'
                    name='search'
                    maxLength='50'
                    placeholder='What do you looking for?'
                    // ref={ }
                />
            </div>

            <div className="btn-box">
                <button type='submit'>
                    <span>search</span>
                </button>
            </div>
        </form>
    );
}


export default SearchProduct
