import {AppBar, Box, Button, Container, Grid, Toolbar} from "@mui/material";
import {AnimatePresence} from "motion/react";
import {Outlet, useLocation} from "react-router";

const Layout = () => {
    const location = useLocation();

    return <>
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <AppBar position={"static"} elevation={0} color="transparent" component="nav">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Box
                        component="img"
                        alt="logo"
                        src="src/assets/roastroy-logo.jpeg"
                        sx={{
                            height: 40,
                            cursor: 'pointer'
                        }}
                    />
                    <Grid>
                        <Button variant="text" color="inherit">홈</Button>
                        <Button variant="text" color="inherit">로스팅 제작</Button>
                        <Button variant="text" color="inherit">소개</Button>
                        <Button variant="text" color="inherit">연락처</Button>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Container
                maxWidth="md"
                disableGutters
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                    mb: 2,
                    // border: 1
                }}>
                <AnimatePresence mode="wait">
                    <Outlet key={location.pathname}/>
                </AnimatePresence>
            </Container>
        </Box>
    </>

}

export default Layout