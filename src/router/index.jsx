import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Home from "../App";
import Add from "../pages/Add";
import Update from "../components/Update";
import Delete from "../components/Delete";

const router = createBrowserRouter(
[
        
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/create",
            element: <Add />,
        },
        {
            path: "/update/:id",
            element: <Update />,
        },
        {
            path: "/delete/:id",
            element: <Delete />,
        },
    ],
);

export default router;
