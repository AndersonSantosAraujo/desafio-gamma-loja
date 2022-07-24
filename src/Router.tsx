import Checkout from "components/Checkout";
import Department from "components/Department";
import { MinicartStorage } from "components/Minicart/MinicartContext";
import Product from "components/Product";
import Search from "components/Search";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <MinicartStorage>
      <Routes>
        <Route path="/" element={<Department />} />
        <Route path="/:name" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </MinicartStorage>
  );
};

export default Router;
