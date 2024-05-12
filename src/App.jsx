import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home/Home";
import Navbar from "./Layout/Navbar/Navbar";
import ProductHome from "./ProductsComponent/ProductHome/ProductHome.jsx";
import Products from "./ProductsComponent/Products/Products.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/center-piece" element={<ProductHome />} />
        <Route exact path="/clocks" element={<ProductHome />} />
        <Route exact path="/lighting" element={<ProductHome />} />
        <Route exact path="/mirrors" element={<ProductHome />} />
        <Route exact path="/porcelain" element={<ProductHome />} />
        <Route exact path="/paintings" element={<ProductHome />} />
        <Route exact path="/seating" element={<ProductHome />} />
        <Route exact path="/storage" element={<ProductHome />} />
        <Route exact path="/sculpture" element={<ProductHome />} />
        <Route exact path="/silverwave" element={<ProductHome />} />
        <Route exact path="/tables" element={<ProductHome />} />
        <Route exact path="/dining-room" element={<ProductHome />} />
        <Route exact path="/living-room" element={<ProductHome />} />
        <Route exact path="/marbles" element={<ProductHome />} />
        <Route exact path="/bedroom" element={<ProductHome />} />
        <Route exact path="/crystal" element={<ProductHome />} />
      </Routes>
    </>
  );
}

export default App;