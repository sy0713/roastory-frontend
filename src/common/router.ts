import {createBrowserRouter} from "react-router";
import Home from "../ui/home.tsx";
import Layout from "../ui/layout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
        ]
    }
])