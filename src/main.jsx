import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import "antd/dist/reset.css";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
