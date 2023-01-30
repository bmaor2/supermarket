import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

    const Cart = () => {
        const [productNum, setProductNum] = useState([]);
        const [subTotal, setSubTotal] = useState(0);
        const axios = require('axios');
    
        useEffect(() => { // Fetch cart
            (async () => {
                try {
                    const res = await axios.post('http://localhost:8000/cart',
                        { token: localStorage.getItem('token') });
    
                    const totalPrice = () => {
                        let total = 0;
                        res.data.isCart.products.forEach(e => {
                            total += Number(e.productCart.price);
                        });
                        return total.toFixed(2);
                    }
                    setProductNum(res.data.isCart.products.length);
                    setSubTotal(totalPrice);
                } catch (err) {
                    console.error(err);
                }
            })();
        }, [axios]);

    return (
        <div className='payment-cart-container'>
            <h2>Cart Summary</h2>
            {/* <Search /> */}
            <div className='payment-cart-box'>
                <div className='cart-cntainer'>
                    {/* {cartSummery.map(e => {
                        return (
                            <div key={e.id} className='product-card'>
                                <div className='img-data'>
                                    <figure className='img-box'>
                                        <Image
                                            cloudName='itamarrosenblum'
                                            publicId={e.img}
                                        />
                                    </figure>
                                    <p>{e.name}</p>
                                </div>

                                <div className='right-box'>
                                    <p>Total amount: <span>$</span>{e.productCart.price}</p>
                                    <p>Quantity: {e.productCart.quantity}</p>
                                </div>
                            </div>
                        );
                    })} */}
                </div>

                <div className='total-price-box'>
                    <p>Subtotal: <span>$</span>{subTotal}</p>
                    <p>{productNum} Products</p>
                </div>
            </div>
        </div>
    );
}


export default Cart


//
<button> className="addtoCartBtn"> Add to Cart>/button>