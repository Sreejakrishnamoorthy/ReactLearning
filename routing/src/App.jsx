import Head from "./components/Head";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import TodoApp from "./components/TodoApp"; // Import the TodoApp component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import NotFound from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import WishList from "./components/WishList";

if(!localStorage.getItem("cart")){

  localStorage.setItem("cart",JSON.stringify([]))
}
function App() {
  let user = "sreeja";
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
