import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import chakraTheme from "./utils/chakraThemeUtils";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
      <Header />
      <App />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
