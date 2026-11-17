import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router'



function ProductList(){
    const [product, setProducts] = useState([])

    async function getProductList(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`) 
        setProducts(response.data)
    }

    useEffect(()=>{
        getProductList()
    },[])
    return(
        <div>
            <h1>Product List</h1>
            {product.map((oneProduct)=>
            <div key={oneProduct._id}>
                <p>Name: {oneProduct.title}</p>
                <Link to={`/product/${oneProduct._id}`}>See Details</Link>
                
            </div>
            )}
        </div>
    )
}

export default ProductList