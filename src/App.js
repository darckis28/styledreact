import React,{useState} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { temaClaro,temaOscuro } from "./Components/UI/temas";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI";
import Swicth from "./Components/Swicth";
function App() {
  const [tema,setTema]=useState(true)
  const toggleTema =()=>{
    setTema((tema)=>!tema)
  }
  return (
    <ThemeProvider theme={tema?temaClaro:temaOscuro}>
    <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <Swicth tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
