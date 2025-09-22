import { useState } from "react"
import axios from "axios"  ;
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

export default function Loginpage(){

 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")
 const navigate=useNavigate()


    function handleLogin(){
        console.log("Email: ",email);
        console.log("password:",password);

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            
       
            email:email,
            password:password
        }).then(
            (response)=>{
                console.log("Login success",response.data);
                toast.success(response.data.message||"Login Success");
                localStorage.setItem("token",response.data.token);

                const user=response.data.user;
                if(user.role=="admin"){
                    navigate("/admin")
                }else{
                    navigate("/")
                }
            }
        ).catch(
            (error)=>{
                console.log("Login error",error);
                toast.error(error.response.data.message||"Login F/aild");
            }
        )

        console.log("Login button click")
    }
    return(
        <div>
                <div className='bg-red-900 h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex '>

                
               <div className="  w-[50%] h-full flex ">
                
   

               </div>
               <div className=" w-[50%] h-full flex justify-center items-center">

                             <div className="w-[450px] h-[600px]  backdrop-blur-xl rounded-xl flex  flex-col justify-center">

                                <input  onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px] "type="email" placeholder="email"
                                /> 

                                <input 
                                 onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"type="password" placeholder="password"/> 
                                <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-700 text-white rounded-xl cursor-pointer">Login</button>
                                
                                

                </div>


  
               </div>
                </div>
        </div>
    )
}