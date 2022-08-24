// import Header from "./components/Header";
// import Button from "./components/Button";
// import {Image} from "./components/Images";
import NavBar from "./components/NavBar";
// import Practice from "./components/Practce";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import TaskManager from "./pages/TaskManager";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";
import Product from "./components/Product";



function App(){
  return (
  <div>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/task-manager" element= {<TaskManager/>}/>
      <Route path= "/product-list" element= {<ProductList/>}/>
      <Route path= "/product-list/:productId" element= {<ProductDetail/>}/>
      <Route path= "/contact" element= {<Contact/>}/>
      <Route path= "/about" element= {<About/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
</div>
); 
}
export default App;








