export default function Loginpage(){
    return(
        <div>
                <div className='bg-red-900 h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex '>

                
               <div className="  w-[50%] h-full flex ">
                
   

               </div>
               <div className=" w-[50%] h-full flex justify-center items-center">

                             <div className="w-[450px] h-[600px]  backdrop-blur-xl rounded-xl flex  flex-col justify-center">

                                <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px] "type="email" placeholder="email"/> 
                                <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"type="password" placeholder="password"/> 
                                <button className="w-[400px] h-[50px] bg-green-700 text-white rounded-xl cursor-pointer">Login</button>
                                
                                

                </div>


  
               </div>
                </div>
        </div>
    )
}