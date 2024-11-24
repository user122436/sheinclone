import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Filters from "./components/layout/filters";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <Filters />
      <Outlet />
      <Footer />
    </>
  );
}
