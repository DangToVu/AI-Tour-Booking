// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext.jsx";
import Home from "./pages/Home";
import AllToursList from "./pages/AllToursList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import PartnerDashboard from "./pages/PartnerDashboard";
import Cart from "./pages/Cart";
import ContactInfo from "./pages/ContactInfo";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<AllToursList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/partner" element={<PartnerDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/contact" element={<ContactInfo />} />{" "}
          <Route path="/checkout" element={<Checkout />} /> {/* BƯỚC 2 */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
