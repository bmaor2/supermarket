import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchProduct = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const time = useRef();
    const navigate = useNavigate()

    const handleChange = async (e) => {
        if (e.target.value === "") {
            setProducts([])
        }
        setSearch(e.target.value);
        e.preventDefault();
        try {
            clearTimeout(time.current);
            time.current = setTimeout(async () => {
                const res = await axios.get(`http://localhost:8000/product/search?product=${e.target.value}`);
                setProducts(res.data);
            }, 500)
        } catch (err) {
            console.log(err)
        }
    }

    const isValid = async (e) => { // search validation
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8000/product/search?product=${search}`);
            setProducts(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const resultClick = (id) => {
        navigate(`/${id}`);
    }

    return (
        <>
            <div className='search_div'>
                <input type='text' onChange={handleChange} value={search} maxLength='50' placeholder='...חפש פריט ' />
                <button onClick={isValid}></button>
            </div>
            <div className={products.length === 0 ? "search_result not-active" : "search_result active"}>
                {products?.map(product =>
                    <div className='result' onClick={() => resultClick(product.product_id)} key={Math.random()}>
                        <p>{product.product_name}</p>
                        <img src={`http://localhost:8000/navbar/img?imgUrl=${product.img_url}`} alt="" />
                    </div>)}
            </div>
        </>
    );
}


export default SearchProduct
