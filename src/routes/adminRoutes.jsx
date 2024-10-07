import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Customerlist from "./components/Customer/Customerlist";
import Cardlist from "./components/Card/Cardlist";
import Carlist from "./components/Cars/Carlist";
import Carallocationtable from "./components/Carallocation/Carallocationtable";
import Dashboard from "./components/DashBoard/Dashboard";
import AddCustomerForm from "./components/Customer/AddCustomerForm";
import CarDetails from "./components/Cars/CarDetails";
import Reports from "./components/Report/Reports";
import UserDetailPage from "./_root/pages/UserDetailPage";
import CustomerDetailPage from "./_root/pages/CustomerDetailPage";
import AddBrandForm from "./components/Brand/AddBrandForm";
import CarType from "./components/CarType/CarType";
import AddUser from "./components/Vendor/AddUser";
import TransactionTable from "./components/Transcation/Transactiontable";
import BookingPage from "./_root/pages/BookingPage";
import UserList from "./components/Vendor/Userlist";
import AddCarForm from "./components/Cars/AddCarsForm";
import UpdateUserPage from "../src/_root/pages/UpdateUserPage";
import CreateTransactionPage from "../src/_root/pages/CreateTransactionPage";
import TransactionList from "./_root/pages/TransactionList";
import TransactionDetailPage from "./_root/pages/TransactionDetailPage";
import TransactionDetails from "./components/Transcation/TransactionDetails";
import UpdateBrand from "./components/Brand/UpdateBrand";
import UpdateCarType from "./components/CarType/UpdateCarType";
import UpdateCars from "./components/Cars/UpdateCars";
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},

			{
				path: "/car-types",
				element: <CarType />,
			},
			{
				path: "/car-types/update/:id/:name",
				element: <UpdateCarType />,
			},
			{
				path: "/brands",
				element: <AddBrandForm />,
			},
			{
				path: "/brands/update/:id/:name",
				element: <UpdateBrand />,
			},
			{
				path: "customers/customer-details/:id",
				element: <CustomerDetailPage />,
			},
			{
				path: "users/add-user",
				element: <AddUser />,
			},

			{
				path: "customer/add-customer",
				element: <AddCustomerForm />,
			},
			{
				path: "/users",
				element: <UserList />,
			},
			{
				path: "/customers",
				element: <Customerlist />,
			},
			{
				path: "users/user-details/:id",
				element: <UserDetailPage />,
			},
			{
				path: "bookings/car-alot",
				element: <BookingPage />,
			},
			{
				path: "/cars",
				element: <Carlist />,
			},
			{
				path: "/cars/add-car",
				element: <AddCarForm />,
			},
			{
				path: "/cars/update-car/:id",
				element: <UpdateCars />,
			},
			{
				path: "reports",
				element: <Reports />,
			},
			{
				path: "/billing-payments/list-cards",
				element: <Cardlist />,
			},
			{
				path: "/bookings",
				element: <Carallocationtable />,
			},
			{
				path: "car-details/:id",
				element: <CarDetails />,
			},
			// {
			// 	path: "cards",
			// 	element: <CardView />,
			// },

			{
				path: "billing-payments/add-card",
				element: <CreateTransactionPage />,
			},
			{
				path: "/transcations",
				element: <TransactionList />,
			},
			{
				path: "/billing-payments/add-card/transaction-list/:id",
				element: <TransactionDetailPage />,
			},
			{
				path: "billing-payments/add-card/transaction-list/:id/transaction",
				element: <TransactionDetails />,
			},
			{
				path: "/users/update/:id",

				element: <UpdateUserPage />,
			},
		],
	},
]);

export default router;
