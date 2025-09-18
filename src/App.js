import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import SingleElement from "./components/SingleElement";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<SingleElement />} />
              <Route path="/products/add" element={<AddProduct />} />
            </Routes>
          </div>
        </div>

        {/* Keep Routes INSIDE the same parent */}
      </div>
    </>
  );
}

export default App;
