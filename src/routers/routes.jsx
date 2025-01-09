import { createBrowserRouter } from "react-router-dom";

import App from '../App'
import Home from "../pages/Home";
import Patents from "../pages/Patents";
import Paper from "../pages/Paper";
import PatentDesc from "../pages/PatentDesc";
import Experience from "../pages/Experience";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/patents",
                element: <Patents/>
            },
            {
                path: "/patents/:id",
                element: <PatentDesc/>
            },
            {
                path: "/papers",
                element: <Paper/>
            },
            {
                path: "/experience",
                element: <Experience/>
            }
        ]
    }
])

export default router;