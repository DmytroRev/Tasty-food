import { Toaster } from "react-hot-toast";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../BlogList/BlogList";
import CountTotal from "../CountTotal/CountTotal";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import ListRec from "../ListRec/ListRec";
import Main from "../Main/Main";
import Navigate from "../Navigate/Navigate";
import ProductList from "../ProductList/ProductList";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import Subscribe from "../Subscribe/Subscribe";
import UnderMain from "../UnderMain/UnderMain";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Navigate />
      <Main/>
      <UnderMain/>
      <AboutUs/>
      <ListRec/>
      <CountTotal/>
      <ProductList/>
      <Discount/>
      <Blog />
      <Subscribe/>
      <Footer />
      <ScrollToTopButton/>
      <Toaster position="center"/>
    </>
  );
}
