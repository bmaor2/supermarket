import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import description_img from "../images/description_img.jpg"
import "./products.scss";
import Navbar from "../navbar/Navbar";

const Products = () => {
    const [categoryId, setCategoryId] = useState(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1])
    const [Products, setProducts] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [renderCart, setRenderCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/product?category=${categoryId}`);
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, [])

    useEffect(() => {
        productToShow.quantity = quantity * 1;
        setProductToShow(productToShow);
    }, [quantity])

    const addToCart = (product) => {
        let isNotExist = false;
        let userOnline = JSON.parse(localStorage.getItem("userOnline"));
        if (!userOnline) alert("You need to login first");
        else if (!userOnline.cart) userOnline.cart = [];
        if (userOnline.cart.length === 0) isNotExist = true;
        else {
            for (let i = 0; i < userOnline.cart.length; i++) {
                if (userOnline.cart[i].product_id * 1 !== product.product_id * 1) {
                    console.log("in true");
                    isNotExist = true;
                }
                else {
                    console.log("in false", userOnline.cart[i].product_id, product.product_id);
                    isNotExist = false;
                    return;
                }
            }
            console.log(isNotExist);
        }
        let sum = 0;
        if (isNotExist) {
            userOnline.cart.push(product);
            for (let i = 0; i < userOnline.cart.length; i++) {
                sum += userOnline.cart[i].price * userOnline.cart[i].quantity;
            }
        } else console.log("no");
        userOnline.totalPrice = sum;
        localStorage.setItem("userOnline", JSON.stringify(userOnline))
        setRenderCart(!renderCart);
    }

    const productClick = (product) => {
        setIsActive(true);
        product.quantity = quantity * 1;
        console.log(product);
        setProductToShow(product);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }
    return (
        <>
            <Navbar />
            <div className="main_container">
                <div onClickCapture={() => {setIsActive(false); setQuantity(1)}} className="product_container">
                    {Products.map((product) => (
                        <div key={Math.random()} className="product">
                            <img onClick={() => productClick(product)} src={`http://localhost:8000/product/img?imgUrl=${product.img_url}`} alt="" />
                            <h2>{product.product_name}</h2>
                            <h4>₪ {product.price}</h4>
                        </div>
                    ))}
                </div>
                <img src="https://tpc.googlesyndication.com/simgad/10022496952409744435" alt="" />
                <Link to="/">Go to the main page</Link>

            </div>
            <div className={isActive ? "product_show active" : "product_show"}>
                <h1>{productToShow.product_name}</h1>
                <img src={productToShow.img_url} alt="" />
                <h3>{productToShow.description}</h3>
                <input type="number" name="quantity" min='1' placeholder="1" onChange={handleQuantity} value={quantity || 1} />
                <h4>₪ {productToShow.price}</h4>
                <span className="addToCart" onClick={() => addToCart(productToShow)}>add to cart</span>
            </div>
        </>
    );
};

export default Products;

