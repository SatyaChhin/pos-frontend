// import "./App.css";
import "../public/styles/styles.css";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/product/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import MainLayout from "./components/layout/MainLayout";
import MainLayoutLogin from "./components/layout/MainLayoutLogin";
import RouteNoteFound from "./components/404/RouteNotFournd";
import CategoryPageA from "./pages-admin/category/CategoryPageA";
import RolePageA from "./pages-admin/role/RolePageA";
import DashboardPageA from "./pages-admin/dashboard/DashboardPageA";
import ProductPageA from "./pages-admin/product/ProductPageA";
import MainLayoutAdmin from "./components/layout/MainLayoutAdmin";
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
