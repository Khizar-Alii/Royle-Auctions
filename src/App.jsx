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
        <Route exact path="/products" element={<Products />} />
        <Route
          exact
          path="/center-piece"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/clocks"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/lighting"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/mirrors"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/porcelain"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/paintings"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/seating"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/storage"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/sculpture"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/silverwave"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/tables"
          element={<ProductHome />}
          cateogoryImage={lighting}
        />
        <Route
          exact
          path="/dining-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/living-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          exact
          path="/marbles"
          element={<ProductHome />}
          cateogoryImage={lighting}
        />
        <Route
          exact
          path="/bedroom"
          element={<ProductHome />}
          cateogoryImage={lighting}
        />
        <Route
          exact
          path="/crystal"
          element={<ProductHome />}
          cateogoryImage={lighting}
        />
      </Routes>
    </>
  );
}

export default App;
