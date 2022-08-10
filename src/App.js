import Header from "./components/Header";
import Button from "./components/Button";
import {Image} from "./components/Images";
import NavBar from "./components/NavBar";

function App(){
  return (
  <div>
     <NavBar/>
    <Header/>
<Button label= "Add to cart"/>
<Button label= "Home"/> 
<Button label= "About"/> 
<Button label= "Register"/>     
<Image />
</div>
); 
}
export default App;

