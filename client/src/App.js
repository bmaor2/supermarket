import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Categories from "./components/category/Categories";
import Addproduct from "./components/products/Addproduct/Addproduct";
import Products from "./components/products/products";
import Updateproduct from "./components/products/Updateproduct";
import Home from "./Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addproduct />} />
          <Route path="/update/:id" element={<Updateproduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Products />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
