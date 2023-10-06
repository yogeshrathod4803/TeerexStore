import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ShoppingCart from "./components/shopping/shoppingCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
