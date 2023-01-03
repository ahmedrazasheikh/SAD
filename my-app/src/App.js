import {  BrowserRouter, Routes, Route,  } from "react-router-dom";
import Login from './Components/login'
import Signup from './Components/signup'
import './index.css'
function App() {

  return (
    <div className="App">
           <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
