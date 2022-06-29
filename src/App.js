import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import OrdersScreen from "./screens/OrdersScreen";
import OrderInfoScreen from "./screens/OrderInfoScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import Shop from "./screens/Shop";
import Footer from "./components/Footer";
import Sproduct from "./screens/Sproduct";
// import Rate from "./components/rating";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/product/:productid" element={<Productdescscreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/orderInfo/:orderid" element={<OrderInfoScreen />} />
          <Route path="/profile" element={<UserProfileScreen />} />
          <Route path="/admin/*" element={<AdminScreen />} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path='/sproduct' element={<Sproduct/>}/>
          {/* <Route path="/rating" element={<Rate />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
