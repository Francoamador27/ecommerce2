import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './componentes/carousel';
import Navmenu from './componentes/navmenu';
import Navbar from './componentes/nav';
import CardsMui from './componentes/CardsMui';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Count from "./componentes/Count/Count";
import Productos from "./componentes/Grid/Grid";
import ItemDetailsContainer from "./componentes/ItemDetailsContainer";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import { CartProvider } from "./context/Cardcontext";
import CheckOut from "./componentes/checkout";
import Colchones from "./pages/colchones";
import Bicicletas from "./pages/bicicletas";
import Electro from "./pages/electro";
import Tecno from "./pages/tecno";
import Mas from "./pages/mas";


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
     <Navbar/>     
<Navmenu/>
<Routes>
<Route  path="/"  element={<Home/>} />
<Route  path="/Productos/:id"  element={<ItemDetailsContainer/>} />
<Route  path="/Checkout"  element={<CheckOut/>} />
<Route path ="/colchon" element= {<Colchones/>} />
<Route path ="/bicicletas" element= {<Bicicletas/>} />
<Route path ="/electro" element= {<Electro/>} />
<Route path ="/tecno" element= {<Tecno/>} />
<Route path ="/mas" element= {<Mas/>} />






</Routes>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
