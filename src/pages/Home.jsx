import React from "react";
import AdminDetails from "../components/adminDetails/AdminDetails";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <div className="home">
      <AdminDetails />
      <Products />
    </div>
  );
};

export default Home;
