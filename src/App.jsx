import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import RootLayout from "./RootLayout";
import CartPage from "./components/pages/CartPage";
export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline enableColorScheme />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products">
            <Route index element={<ProductsPage />} />
            <Route path=":categoryName" element={<ProductsPage />} />
          </Route>
          <Route path="/card" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// localhost: 5173/products;

// TODO: Add header and footer components
// TODO: Add basic products, cart and category pages
// TIP: use mui docs for components
