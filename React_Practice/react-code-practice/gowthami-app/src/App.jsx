import './App.css'
import { useState } from 'react';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Content from "./components/content-components/content";
import Ourapproach from "./components/content-components/ourapproach/ourapproach";
import NewThisWeek from "./components/content-components/newthisweek/newthisweek";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagination from "./PAGINATIONPRACT/pagination";
// import PLP from "./PAGINATIONPRACT/PLP/productListPage";

function App() {
  const [userIconChange, setUserIconChange] = useState("");

  return (
    <>
      <BrowserRouter>
        <Navbar
          userIconChange={userIconChange}
          setUserIconChange={setUserIconChange}
        />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/NewThisWeek" element={<NewThisWeek />} />
          <Route path="/Ourapproach" element={<Ourapproach />} />
          <Route path="/PLP" element={
            <>
              <Pagination />
              {/* <PLP /> */}
            </>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App
