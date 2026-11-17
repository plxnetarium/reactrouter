import { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function ProductDetails() {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()
    console.log(productId)

    async function getProduct() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProduct(response.data)
    }

    useEffect(() => { getProduct() }, [])
    return (
        <div>
            <h1>Product Details</h1>
            {product ? <> 
            <p>title: {product.title}</p> 
            <p>description: {product.description}</p>  </>
            
            
            : null}
        </div>
    )
}

export default ProductDetails
