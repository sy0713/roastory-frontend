import {createTheme} from "@mui/material"
import {grey} from "@mui/material/colors"

const theme = createTheme({
    palette: {
        primary: {
            main: grey[500],
            light: grey[300],
            dark: grey[700],
        },
        background: {
            default: '#FFFFFF',
            paper: grey[100]
        },
        text: {
            primary: '#000000',
            secondary: grey[700],
        }
    },
})

export default theme