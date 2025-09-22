import { Link } from "react-router-dom";

export default function AddProduct() {
  return(
    <div className="w- full h-full  bg-red-900">
       <div className="w-[600px] h-[700px] bg-white mx-auto mt-20 rounded-md shadow-xl">

        <input
        className="w-full h-[50px] border-b-2 border-black"
        placeholder="Product Name"/>

          <input
        className="w-full h-[50px] border-b-2 border-black"
        placeholder="Product Name"/>

          <input
        className="w-full h-[50px] border-b-2 border-black"
        placeholder="Product Name"/>

          <input
        className="w-full h-[50px] border-b-2 border-black"
        placeholder="Product Name"/>

          <input
        className="w-full h-[50px] border-b-2 border-black"
        placeholder="Product Name"/>

        <div>
            <Link to={"/admin/products"}className="bg-red-500 w-[100px] h-[30px] rounded-md text-white mx-auto mt-10">Cancel</Link>
    
            <button className="bg-green-500 w-[100px] h-[30px] rounded-md text-white mx-auto mt-10">Submit</button>
        </div>
        

       </div>
    </div>

  )
}