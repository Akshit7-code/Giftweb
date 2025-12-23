// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminPanel from './pages/Admin';
// import Navbar from './pages/Navbar';  
// import UserHome from './pages/Home';
// import CuratedWorlds from './pages/CuratedWorlds';
// import Footer from './pages/Footer';
// import ProductSlider from './pages/ProductSlider';

// function App() {
//   return (
//     <Router>
//         <Navbar/>
//       <Routes>
//         <Route path="/" element={<UserHome />} />
//         {/* Only those with this exact link can access the panel */}
//         <Route path="/ankur-admin-9482" element={<AdminPanel />} />
//       </Routes>
//       <CuratedWorlds/>
//       <ProductSlider/>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CuratedWorlds from "./pages/CuratedWorlds";
import ProductSlider from "./pages/ProductSlider";
import ProductCollection from "./pages/ProductCollection";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Contact from "./pages/ContactPage";
import AboutUs from "./pages/About";

const dataLoader = async () => {
  return [];
};

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataLoader()
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home / Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Home products={products} />
              <CuratedWorlds />
              <ProductSlider products={products} />
              <ProductCollection products={products} />
            </>
          }
        />

        {/* Admin */}
        <Route
          path="/ankur-admin-9482"
          element={<Admin products={products} setProducts={setProducts} />}
        />

        {/* Contact Page */}
        <Route path="/Contact" element={<Contact />} />

        {/* Product Page */}
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
