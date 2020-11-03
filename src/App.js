import Home from './containers/Home'

import {
  ThemeProvider,
  CSSReset,
  theme,
} from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Home />
    </ThemeProvider>
  );
}

export default App;
