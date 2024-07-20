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

function App() {
  // const [loader, setLoader] = useState<boolean>(false);
  const [popFooter, setPopFooter] = useState<string>();
  const [cookiePop, setCookiePop] = useState<boolean>(false);
  const { loader } = Dynamic();
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
      <Header />
      <Home />
      <ToastContainer position="bottom-center" />
      {loader && <Loading />}
      {popFooter && (
        <PopFooter popFooter={popFooter} setPopFooter={setPopFooter} />
      )}
      {cookiePop && <PopUp />}
      <Footer setPopFooter={setPopFooter} />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  /* background: ${COLORS.light}; */
  background: ${COLORS.dark};
  padding: 0px 10px;
  /* height: 100vh; */
  position: relative;
`;
