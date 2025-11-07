import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/CustomerDashboard.css";

const CustomerDashboard = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "40px", textAlign: "center", minHeight: "60vh" }}>
        <h1>Customer Dashboard</h1>
        <p>Trang này đang được phát triển...</p>
      </main>
      <Footer />
    </>
  );
};

export default CustomerDashboard;
