import styled from "styled-components";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./Home/Home";
import { COLORS } from "./styles/styles";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loading from "./Loading/Loading";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PopFooter from "./Footer/PopFooter";
import PopUp from "./PopUp/PopUp";
import { Dynamic } from "./Context/ContextDynamic";
import Avis from "./Forms/Avis";
import SendLoaderMail from "./Loading/SendLoaderMail";
import { Route, Routes } from "react-router-dom";
import UploadCv from "./Forms/UploadCv";
import UploadCvTwo from "./Forms/UploadCvTwo";
import TheSkills from "./PagesSuplementaires/TheSkills";
import SearchLoading from "./Loading/SearchLoading";
import Reconversion from "./PagesSuplementaires/Reconversion";

function App() {
  // const [loader, setLoader] = useState<boolean>(false);
  const [popFooter, setPopFooter] = useState<string>();
  const [cookiePop, setCookiePop] = useState<boolean>(false);
  const [sendAvis, setSendAvis] = useState<boolean>(false);
  const { loader, sendLoaderMail, loadingSearch } = Dynamic();
  const checkIfAccept = () => {
    const nameEQ = "acceptSkillXp" + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  useEffect(() => {
    if (!checkIfAccept()) {
      setCookiePop(true);
    }
  }, []);
  return (
    <StyledApp className="App">
      <Header setSendAvis={setSendAvis} />
      <Routes>
        {/* <Home /> */}
        <Route path="/jobs" element={<UploadCv />}></Route>
        <Route path="/cv" element={<UploadCvTwo />}></Route>
        <Route path="/skills" element={<TheSkills />}></Route>
        <Route path="/orientation" element={<Reconversion />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <ToastContainer position="bottom-center" />
      {sendAvis && <Avis setSendAvis={setSendAvis} />}
      {loader && <Loading />}
      {sendLoaderMail && <SendLoaderMail />}
      {popFooter && (
        <PopFooter popFooter={popFooter} setPopFooter={setPopFooter} />
      )}
      {cookiePop && <PopUp setPopFooter={setPopFooter} />}
      {loadingSearch && <SearchLoading />}
      <Footer setPopFooter={setPopFooter} />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background: ${COLORS.dark};
  /* background: ${COLORS.glob}; */
  padding: 0px 10px;
  /* height: 100vh; */
  position: relative;
`;
