
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/Paginas/About/About';
import Contactos from './components/Paginas/Contactos/Contactos';
import BasicExample from './components/Navbar/Navbar'
import Productos from './components/Paginas/Productos/Productos';
import Pie from './components/Footer/Footer';
import Lensometros from './components/Paginas/Productos/Lensometros/Lensometros';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<BasicExample />}>
            <Route index element={<About/>} />
            <Route path='About' element={<About />} />
            <Route path='Contactos' element={<Contactos />} />
            <Route path='Productos' element={<Productos />} />
            <Route path='Lensometros' element={<Lensometros />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Pie />
    </div>
  );
} 
  export default App;
