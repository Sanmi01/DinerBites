import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Local from './pages/products/Local';
import Foreign from './pages/products/Foreign';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex vh-100 justify-content-between row">
    <Header />
      <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/local' element={<Local/>}/>
            <Route path='/foreign' element={<Foreign/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
