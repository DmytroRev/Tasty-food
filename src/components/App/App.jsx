import AboutUs from "../AboutUs/AboutUs";
import CountTotal from "../CountTotal/CountTotal";
import Header from "../Header/Header";
import ListRec from "../ListRec/ListRec";
import Main from "../Main/Main";
import Navigate from "../Navigate/Navigate";
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
    </>
  );
}
