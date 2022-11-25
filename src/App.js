import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './storage/CartContext';
import CartView from './components/CartView/CartView';
import Error from './components/Error/Error';
import Checkout from './components/Checkout/Checkout';
import Envios from './components/Envios/Envios';
import IniciarSesion from './components/IniciarSesion/IniciarSesion';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <header className="App-header"><NavBar/></header>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer/>} />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartView/>}/>
          <Route path="/checkout/:orderid" element={<Checkout/>}/>
          <Route path="/envios" element={<Envios/>}/>
          <Route path="/iniciarSesion" element={<IniciarSesion/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;