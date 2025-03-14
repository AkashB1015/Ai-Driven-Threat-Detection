import React from "react";
import FrontPage1 from "./frontpage/landingpage";
import AuthForm from "./login_page/AuthForm";
import Menu from "./Deshboard/menu";
import Content1 from "./Services/connect";
import ContactPage1 from "./contact/add"; // Renamed to follow PascalCase
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontPage1 />
    },
    {
        path: "/login",
        element: <AuthForm />
    },
    {
        path: "/Dashboard",
        element: <Menu />
    },
    {
        path: "/service",
        element: <Content1 />
    },
    {
        path: "/contact",
        element: <ContactPage1 />
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
