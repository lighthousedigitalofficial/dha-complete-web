import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

const router = createBrowserRouter([
	...adminRoutes,
	...userRoutes,
	...authRoutes,
]);

export default router;
