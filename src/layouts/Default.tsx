import { Outlet } from "react-router-dom";
import $ from "jquery";
import Panel from "../components/navigation/Panel";
import Bar from "../components/navigation/Bar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState, useEffect } from "react";
import * as React from "react";

export default function Default() {
    const drawerWidth = 283;
    const permanent: "permanent" = "permanent";
    const temporary: "temporary" = "temporary";
    const [domWidth, setDomWidth] = useState(0);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        if (window.innerWidth <= 959) setMobileOpen(!mobileOpen);
    };

    // mounted once for the sidebar
    useEffect(() => {
        var width = window.innerWidth;
        // if (width <= 959) {
        setDomWidth(width);
        // }

        window.addEventListener("resize", function (event) {
            var w = window.innerWidth;
            width = w;
        });
        $(window).resize(() => {
            if (width <= 959 && domWidth! < 959) {
                setDomWidth(width);
            } else if (width > 959 && domWidth !== width) {
                setDomWidth(width);
            }
        });
    }, []);
    return (
        <Box position="relative" sx={{ display: "flex" }}>
            {/* <CssBaseline /> */}
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                {/* <Toolbar> */}
                <Bar handleDrawerToggle={handleDrawerToggle} />
                {/* </Toolbar> */}
            </AppBar>
            <Drawer
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                variant={domWidth <= 959 ? temporary : permanent}
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
                    <Panel onClose={handleDrawerToggle} />
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
