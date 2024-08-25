// import "./App.css";
import "../public/styles/styles.css";
import HomePage from "./page/home/HomePage";
import ProductPage from "./page/product/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./page/about/AboutPage";
import MainLayout from "./component/layout/MainLayout";
import MainLayoutLogin from "./component/layout/MainLayoutLogin";
import RouteNoteFound from "./component/404/RouteNotFournd";

import CategoryPageA from "./page-admin/category/CategoryPageA";
import RolePageA from "./page-admin/role/RolePageA";
import DashboardPageA from "./page-admin/dashboard/DashboardPageA";
import ProductPageA from "./page-admin/product/ProductPageA";
import MainLayoutAdmin from "./component/layout/MainLayoutAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProductPage />} />
          <Route path="*" element={<RouteNoteFound />} />
        </Route>

        <Route element={<MainLayoutLogin />}>
          <Route path="/login" element={<ProductPage />} />
          <Route path="/register" element={<ProductPage />} />
        </Route>

        {/* admin route  */}
        <Route element={<MainLayoutAdmin />} path="/admin">
          <Route path="" element={<DashboardPageA />} />
          <Route path="category" element={<CategoryPageA />} />
          <Route path="role" element={<RolePageA />} />
          <Route path="product" element={<ProductPageA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
