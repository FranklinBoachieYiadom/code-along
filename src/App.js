// import Header from "./components/Header";
// import Button from "./components/Button";
// import {Image} from "./components/Images";
import NavBar from "./components/NavBar";
// import Practice from "./components/Practce";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import TaskManager from "./components/TaskManager";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";




function App(){
  return (
  <div>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/task-manager" element= {<TaskManager/>}/>
      <Route path= "/product-list" element= {<ProductList/>}/>
      <Route path= "/contact" element= {<Contact/>}/>
      <Route path= "/about" element= {<About/>}/>
     </Routes>
     </BrowserRouter>
</div>
); 
}
export default App;








