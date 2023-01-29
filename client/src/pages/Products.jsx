import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [products,setproducts] = useState([])

    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:8020/products")
                // console.log(res)
                setproducts(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
    },[])


  return (
    <div>
      <h1>Our Products</h1>
      <div className="products">
        {/* {products.map(product=>(

        ))} */}
      </div>
    </div>
  )
}

export default Products
