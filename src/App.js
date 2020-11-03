import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
