import GlobalStyle from "~common/styles/global";
import { PaymentConfirmationProvider } from "~store/contexts/PaymentContext";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "~common/styles/theme";
import { routes } from "~setup/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PaymentConfirmationProvider>
        <RouterProvider router={routes} />
      </PaymentConfirmationProvider>
    </ThemeProvider>
  );
}

export default App;
