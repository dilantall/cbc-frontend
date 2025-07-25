import{BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css'
import Loginpage from './pages/loginPage'
import AdminPage from './pages/adminpage'

function App() {

  return(
    <BrowserRouter>
      <Routes path="/*">

        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element ={<Loginpage/>}/>
        <Route path="/" element ={<h1>Home</h1>}/>
        <Route path="/*" element={<h1>404 Not Found</h1>}/>


      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
