import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import { CartItem } from "./CartItem";

const Cart = () => {
    const navigate = useNavigate()
    const userOnline = JSON.parse(localStorage.getItem("userOnline"));
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("userOnline"))?.cart);
    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem("userOnline"))?.totalPrice);
    const [isRemoved, setIsRemoved] = useState(false)

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("userOnline"))?.cart);
        setTotalPrice(JSON.parse(localStorage.getItem("userOnline"))?.totalPrice * 1)
    }, [JSON.parse(localStorage.getItem("userOnline"))?.cart?.length, isRemoved])

    const createDateFormat = (d) => {
        let date = d.getFullYear().toString() + '-' + `${d.getMonth().toString().length === 2 ? d.getMonth().toString() : '0' + d.getMonth().toString()}` + '-' + `${d.getDay().toString().length === 2 ? d.getDay().toString() : '0' + d.getDay().toString()}` + ' ' + d.getHours().toString() + ':' + `${d.getMinutes().toString().length === 2 ? d.getMinutes().toString() : '0' + d.getMinutes().toString()}` + ':' + `${d.getSeconds().toString().length === 2 ? d.getSeconds().toString() : '0' + d.getSeconds().toString()}`;

        return date;
    }

    const removeItem = (id) => {
        let tempArr = JSON.parse(JSON.stringify(cartItems))
        let productPrice = tempArr[tempArr?.findIndex(obj => obj.product_id === id)].price
        console.log(tempArr?.findIndex(obj => obj.product_id === id));
        tempArr?.splice(tempArr?.findIndex(obj => obj.product_id === id), 1);
        setCartItems(tempArr);
        setIsRemoved(!isRemoved)
        setTotalPrice(totalPrice - productPrice)
        userOnline.totalPrice -= productPrice;
        userOnline.cart = tempArr;
        localStorage.setItem("userOnline", JSON.stringify(userOnline));
        window.location.reload();
    }

    const payment = async () => {
        let d = new Date()
        userOnline.date_ordered = createDateFormat(d);
        try{
            let paymentOrder = await axios.post(`http://localhost:8000/orders/newOrder`, userOnline)
            let result = await paymentOrder.data;
            console.log(result);
        }
        catch{
            
        }

        userOnline.cart = [];
        userOnline.totalPrice = 0;
        delete userOnline.date_ordered;
        localStorage.setItem("userOnline", JSON.stringify(userOnline));
        navigate(-1);
    }

    return (
        <div className="cart">
            <h1>Your Cart Items</h1>
            {cartItems?.length > 0
                ?
                <><div className="cart_product_container">
                    {cartItems?.map(product => <CartItem removeItem={removeItem} key={Math.random()} product={product} />)}
                </div>
                    <div className="payment">
                        <p>total price: {totalPrice}</p>
                        <button onClick={payment}>לתשלום</button>
                    </div></>
                :
                <img className="empty_cart" src='http://localhost:8000/product/img?imgUrl=/home/hilma/study/Class_projects/supermarket/server/images/default/emptyCart.png' alt="empty cart" />}

        </div>
    );
};

export default Cart