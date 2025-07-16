import {CssBaseline} from "@mui/material";
import {RouterProvider} from "react-router";
import {router} from "./common/router.ts";

const App = () => {

    return <>
        <CssBaseline/>
        <RouterProvider router={router}/>
    </>
}

export default App
