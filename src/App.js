import { ThemeProvider } from "styled-components";

import Home from "./Pages/Home";
import "./styles/App.css";
import GlobalStyle from "./styles/Global";

function App() {
  const theme = {
    borderColor: "#BFBFBF",
    hoverColor: "#636262",
    hoverColors: [
      "rgb(157, 213, 216)",
      "#0FB197",
      "rgb(65, 39, 75)",
      "#1F849F",
      "#FFC036",
      "#778a74",
    ],
  };


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <Home/>
    </ThemeProvider>
  );
}

export default App;