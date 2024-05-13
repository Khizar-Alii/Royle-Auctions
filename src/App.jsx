import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home/Home";
import Navbar from "./Layout/Navbar/Navbar";
import ProductHome from "./ProductsComponent/ProductHome/ProductHome.jsx";
import Products from "./ProductsComponent/Products/Products.jsx";
import { lighting } from "./ProductsComponent/ProductsCategories.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/center-piece"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/clocks"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/lighting"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/mirrors"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/porcelain"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/paintings"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/seating"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/storage"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/sculpture"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/silverwave"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/tables"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/dining-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/living-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/marbles"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/bed-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/crystal"
          element={<ProductHome cateogoryImage={lighting} />}
        />
      </Routes>
    </>
  );
}

export default App;