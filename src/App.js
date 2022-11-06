import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header"><NavBar/></header>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer/>} />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
