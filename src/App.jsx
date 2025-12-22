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
import Navbar from './pages/Navbar'; 
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CuratedWorlds from "./pages/CuratedWorlds";
import ProductSlider from "./pages/ProductSlider";
import Footer from "./pages/Footer";

// Mock dataLoader - replace with your actual API/Firebase call
const dataLoader = async () => {
  // return fetch('/api/products').then(res => res.json());
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
        {/* Main Landing Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Home products={products} />
              <CuratedWorlds />
              <ProductSlider products={products} />
            </>
          } 
        />

        {/* Admin Route - Isolated from landing page content */}
        <Route
          path="/ankur-admin-9482"
          element={<Admin products={products} setProducts={setProducts} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}