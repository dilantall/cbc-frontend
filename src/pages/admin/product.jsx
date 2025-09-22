import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function AdminProductPage() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product/")
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch((error) => {
                console.error("Error fetching products:", error)
            })
    }, [])

    return (
        <div className="w-full max-h-full rounded-b-lg">
            <Link to="/admin/addProduct">
                Add Product
            </Link>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Product ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Price</th>
                        <th className="p-2 border">Labeled Price</th>
                        <th className="p-2 border">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product, index) => (
                        <tr key={index} className="text-center border">
                            <td className="p-2 border">{product.productId}</td>
                            <td className="p-2 border">{product.name}</td>
                            <td className="p-2 border">{product.price}</td>
                            <td className="p-2 border">{product.labeledPrice}</td>
                            <td className="p-2 border">{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
