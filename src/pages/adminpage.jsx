import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa6";

import { FaWarehouse } from "react-icons/fa";

import AdminProductPage from "./admin/product";
import AddProduct from "./admin/addproduct";

export default function AdminPage(){
    return(
        <div className="w-full  h-screen bg-gray-200 flex p-2">
            <div className="h-full w-[300px]">

                <Link to="/admin/users" className="p-2  flex justify-center items-center"><FaUsers className="mr-2"/> Users</Link>
                 <Link to="/admin/product" className="p-2  flex justify-center items-center"><FaWarehouse  className="mr-2" />product</Link>
                  <Link to="/admin/orders" className="p-2  flex justify-center items-center"><FaFileInvoice  className="mr-2"/>orders</Link>

            </div>
            <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
                <Routes path="/">
              
                 <Route path="/users" element={<h1>Users</h1>}/>
                <Route path="/product" element={<AdminProductPage/>}/>
                <Route path="/orders" element={<h1>orders</h1>}/>
                <Route path="/addProduct" element={<AddProduct/>}/>
                 </Routes>

               

            </div>
     
        </div>
    )
}
