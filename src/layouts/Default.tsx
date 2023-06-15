import { Outlet } from "react-router-dom";
import $ from "jquery";
import Panel from "../components/navigation/Panel";
import Bar from "../components/navigation/Bar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 283;
var variant: any = "permanent";
var currentScrollPosition = window.scrollY;

export default function Default() {
    return (
        <Box position="relative" sx={{ display: "flex" }}>
            {/* <CssBaseline /> */}
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                {/* <Toolbar> */}
                <Bar />
                {/* </Toolbar> */}
            </AppBar>
            <Drawer
                variant={variant}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <Panel />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <main className="page__content container">
                    <Outlet />
                </main>
            </Box>
        </Box>
    );
}
