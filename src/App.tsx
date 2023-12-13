import GlobalStyle from "~common/styles/global";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "~common/styles/theme";
import { routes } from "~setup/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
