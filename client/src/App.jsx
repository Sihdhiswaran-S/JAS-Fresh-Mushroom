import './App.css'
import Footer from './components/footer.jsx';
import "./styles/Header.css";
import "./styles/Link_fix.css";
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Product.jsx';
import Benefits from './pages/Benefits.jsx';
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app_container">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/benefits" element={<Benefits />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
