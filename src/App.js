import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import Home from "./containers/Home";
import Login from "./containers/Login";

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
