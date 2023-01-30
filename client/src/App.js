import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Addproduct from "./pages/Addproduct";
import Updateproduct from "./pages/Updateproduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addproduct />} />
          <Route path="/update/:id" element={<Updateproduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
