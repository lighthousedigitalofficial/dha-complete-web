import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";

const router = createBrowserRouter([...adminRoutes, ...userRoutes]);

export default router;
