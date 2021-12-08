import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllProducts from "./pages/AllProducts/AllProducts";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import OrderSuccessful from "./pages/OrderSuccessful/OrderSuccessful";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/order-successful" element={<OrderSuccessful />}/>
        <Route path="/all-products" element={<AllProducts />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
