import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// components
import App from "./App.jsx";
import Payment from "./components/payment/Payment";
import ErrorPage from "./ErrorPage";
import Classes from "./pages/Classes/Classes";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Instructors from "./pages/Instructors/Instructors";
import Login from "./pages/Login/Login";
import SignUp from "./pages/sign-up/SignUp";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/sign-up", element: <SignUp /> },
            { path: "/instructors", element: <Instructors /> },
            { path: "/classes", element: <Classes /> },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
            {
                path: "/payment/:classId",
                element: (
                    <PrivateRoute>
                        <Payment />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
