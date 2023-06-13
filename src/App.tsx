// import React from "react";
import Login from "./pages/auth/Login";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
// layouts
import DefaultLayout from "./layouts/Default";
import EmptyLayout from "./layouts/Empty";
import ErrorLayout from "./layouts/Error";

// pages
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import User from "./pages/users/User";

// error page
import Error from "./pages/Error";
import "@fontsource/work-sans";

function App() {
    // define routes
    const router = createBrowserRouter([
        // auth route
        {
            path: "/",
            children: [
                {
                    index: true,
                    element: <Navigate to={"/login"} replace />,
                },
            ],
        },
        // navigation routes
        {
            path: "/dashboard",
            element: <DefaultLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
                {
                    path: "users",
                    element: <Users />,
                },
                {
                    path: "user/:id",
                    element: <User />,
                },
            ],
        },
        // login route
        {
            path: "/login",
            element: <EmptyLayout />,
            children: [
                {
                    index: true,
                    element: <Login />,
                },
            ],
        },
        // error page route
        {
            path: "*",
            element: <ErrorLayout />,
            children: [
                {
                    index: true,
                    element: <Error />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
