import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Home from "../App";
import Add from "../pages/Add";
import Update from "../components/Update";
import NavBar from "../components/NavBar";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter(     
[
        
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/dashboard",
            element: (
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
                
             ) ,
        },
        {
            path: "/create",
            element: (
                <PrivateRoute>
                    <Add />
                </PrivateRoute>
                
             ) ,
        },
        {
            path: "/update/:id",
            element: <Update />,
        },
        
    ],
);

export default router;
