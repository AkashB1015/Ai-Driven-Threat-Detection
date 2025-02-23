import React from "react";
import FrontPage1 from "./frontpage/landingpage";
import AuthForm from "./login_page/AuthForm";
import Menu from "./Deshboard/menu";
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
        path: "/Deshboard",
        element: <Menu/>
    }

]);

const App = () => {
    return (
        <>
           <RouterProvider router={router} />
          
        </>
    );
};

export default App;
