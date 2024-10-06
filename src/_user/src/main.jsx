import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./_root/redux/store";
import router from "./router";
import ScrollToTop from "./components/ScrollToTop";

// Create a theme instance
const theme = createTheme({

});

createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </ThemeProvider>
  </Provider>
);
