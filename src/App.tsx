import theme from './common/theme';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router";
import {router} from "./common/router.ts";

const App = () => {

    return <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </>
}

export default App
