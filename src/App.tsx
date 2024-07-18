import styled from "styled-components";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./Home/Home";
import { COLORS } from "./styles/styles";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Loading from "./Loading/Loading";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PopFooter from "./Footer/PopFooter";

function App() {
  const [loader, setLoader] = useState<boolean>(false);
  const [popFooter, setPopFooter] = useState<string>();
  return (
    <StyledApp className="App">
      <Header />
      <Home setLoader={setLoader} />
      <ToastContainer position="bottom-center" />
      {loader && <Loading />}
      {popFooter && (
        <PopFooter popFooter={popFooter} setPopFooter={setPopFooter} />
      )}
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
