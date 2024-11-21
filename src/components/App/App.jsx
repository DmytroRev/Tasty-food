import AboutUs from "../AboutUs/AboutUs";
import Blog from "../BlogList/BlogList";
import CountTotal from "../CountTotal/CountTotal";
import Discount from "../Discount/Discount";
import Header from "../Header/Header";
import ListRec from "../ListRec/ListRec";
import Main from "../Main/Main";
import Navigate from "../Navigate/Navigate";
import ProductList from "../ProductList/ProductList";
import UnderMain from "../UnderMain/UnderMain";

export default function App() {
  return (
    <>
      <Header />
      <Navigate />
      <Main/>
      <UnderMain/>
      <AboutUs/>
      <ListRec/>
      <CountTotal/>
      <ProductList/>
      <Discount/>
      <Blog />
    </>
  );
}
