import{BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css'
import Loginpage from './pages/loginPage'
import AdminPage from './pages/adminpage'
import Testing from "./pages/testing";
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return(
    <BrowserRouter>
    <Toaster position="top-right"/>
      
      <Routes path="/*">

        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element ={<Loginpage/>}/>
        <Route path="/testing" element ={<Testing/>}/>
        <Route path="/*" element={<h1>404 Not Found</h1>}/>
        


      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
