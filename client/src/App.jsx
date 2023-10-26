import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/HOme"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/profile"
import About from "./pages/about"
import Header from "./components/Header"
const App = () => {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/sign-in" element = {<SignIn/>} />
    <Route path="/sign-up" element = {<SignUp/>} />
    <Route path="/profile" element = {<Profile/>} />
    <Route path="/about" element = {<About/>} />
    
   
  </Routes>
  </BrowserRouter>
  )
}

export default App
