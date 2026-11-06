import './App.css'
import { useState } from 'react';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Content from "./components/content-components/content";
import Ourapproach from "./components/content-components/ourapproach/ourapproach";
import NewThisWeek from "./components/content-components/newthisweek/newthisweek";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagination from "./PAGINATIONPRACT/pagination";
import ProductDetails from "./PAGINATIONPRACT/PDP/productDetailsPage";
// import PLP from "./PAGINATIONPRACT/PLP/productListPage";
import ProductProvider from "./context/productContext";
import ProductListProvider from "./context/productListContext";


function App() {
  const [userIconChange, setUserIconChange] = useState(() => {
    return localStorage.getItem("loggedUser") !== null;
  });

  return (
    <>
    <ProductProvider>
      <ProductListProvider>
            <BrowserRouter>
        <Navbar
          userIconChange={userIconChange}
          setUserIconChange={setUserIconChange}
        />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/NewThisWeek" element={<NewThisWeek />} />
          <Route path="/Ourapproach" element={<Ourapproach />} />
          {/* <Route path="/Ourapproach" element={<Ourapproach />} /> */}
          <Route path="/PLP" element={
            <>
              <Pagination />
              {/* <PLP /> */}
            </>
          } />
          <Route path="/pdp/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      </ProductListProvider>
    </ProductProvider>
      

    </>
  );
}

export default App
