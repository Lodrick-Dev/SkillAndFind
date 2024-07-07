import styled from "styled-components";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./Home/Home";
import { COLORS } from "./styles/styles";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Loading from "./Loading/Loading";

function App() {
  const [loader, setLoader] = useState<boolean>(false);
  return (
    <StyledApp className="App">
      <Home setLoader={setLoader} />
      <ToastContainer position="bottom-center" />
      {loader && <Loading />}
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  /* background: ${COLORS.light}; */
  background: ${COLORS.dark};
  padding: 10px;
  height: 110vh;
`;
