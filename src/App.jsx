import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home/Home";
import Navbar from "./Layout/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
