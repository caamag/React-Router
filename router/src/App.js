
import './App.css';

//router config
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

//pages
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import ProductsDetails from './pages/produtoDetails';

//components
import NavBar from './components/navBar';


function App() {
  return (
    <div className="App">

      <h1>React Router</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<ProductsDetails />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
