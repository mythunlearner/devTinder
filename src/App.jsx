import { BrowserRouter, Routes, Route } from "react-router"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {
  return (
    <>
      <BrowserRouter basename="/">    
       {/* This Routes component  is like a wrapper for the  different routes*/}
         <Routes> 
            <Route path="/" element={<Body/>}>
               <Route path="/login" element={<Login/>}/>
               <Route path="/profile" element={<Profile/>}/>
            </Route>
         </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App
