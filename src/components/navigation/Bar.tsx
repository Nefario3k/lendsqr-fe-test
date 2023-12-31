import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import LogoSvg from "../../assets/svg/sizedLogo.svg";
import TextLogo from "../../assets/svg/textLogo.svg";
import Avatar from "../../assets/images/temp/avatar.png";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
const Bar = (props: any) => {
    var currentScrollPosition = window.scrollY;
    const [domHeight, setDomHeight] = React.useState(currentScrollPosition);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }
    const [scrollPosition] = React.useState(0);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            var currentScrollPosition = window.scrollY;

            if (currentScrollPosition > scrollPosition && domHeight === 0) {
                setDomHeight(currentScrollPosition);
            } else if (currentScrollPosition === scrollPosition) {
                setDomHeight(currentScrollPosition);
            }
        });
    }, []);

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <>
            <AppBar
                color="transparent"
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <nav
                    className={`navigation d-flex align-items-center justify-content-between ${
                        domHeight ? "shadowApp" : ""
                    }`}
                >
                    {/* logo and search form  */}
                    <div className="nav__left ">
                        <div className="left__content desktop w-100 d-none align-items-center justify-content-between">
                            <Link to="/dashboard">
                                <img src={LogoSvg} alt="Logo" />
                            </Link>
                            <form className="left__search d-flex align-items-center">
                                <input
                                    required
                                    type="text"
                                    placeholder="Search for anything"
                                />
                                <button className=" d-flex align-items-center justify-content-center">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className="left__content mobile w-100 d-flex align-items-center">
                            <div
                                onClick={props.handleDrawerToggle}
                                className="hamburger"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1630_86626)">
                                        <path
                                            d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                                            fill="#213f7d"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1630_86626">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <Link to="/dashboard">
                                <img src={TextLogo} alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    {/* mobile input  */}
                    <form className="left__search d-flex mobile align-items-center">
                        <input
                            required
                            type="text"
                            placeholder="Search for anything"
                        />
                        <button className=" d-flex align-items-center justify-content-center">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </form>

                    {/* user content contol section  */}
                    <div className="nav__right d-flex align-items-center justify-content-end">
                        <Link className="d-none right__docs" to="/dashboard">
                            Docs
                        </Link>
                        <button
                            title="Notifications"
                            className="d-none  right__notification"
                        >
                            <svg
                                width="22"
                                height="24"
                                viewBox="0 0 22 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7001 12.6913C17.718 15.5178 18.8518 18.2235 20.8584 20.2183C21.0327 20.3912 21.0856 20.6531 20.9916 20.8804L20.9912 20.8815C20.8964 21.107 20.676 21.2561 20.4284 21.2549M17.7001 12.6913L20.429 21.0549M17.7001 12.6913V12.5968V10.6642C17.7176 9.12752 17.2154 7.63071 16.275 6.41524C15.3984 5.28217 14.1892 4.45625 12.821 4.05095C13.2642 3.42355 13.3572 2.60324 13.0487 1.88438L13.0486 1.88426C12.6962 1.06444 11.8907 0.53333 10.9982 0.53333C10.1057 0.53333 9.30018 1.06444 8.94771 1.88426L8.94766 1.88438C8.63969 2.60199 8.73182 3.42065 9.17296 4.04761C7.82501 4.42985 6.62769 5.22584 5.75338 6.32787C4.81219 7.51196 4.30025 8.97972 4.30025 10.4925L4.30025 12.5968L4.30025 12.5973C4.30723 15.4578 3.17063 18.2015 1.14175 20.2183C0.967488 20.3912 0.914595 20.6531 1.00854 20.8804L1.00898 20.8814C1.10373 21.107 1.32419 21.2561 1.57172 21.2549M17.7001 12.6913L8.02208 21.2549M20.4284 21.2549C20.4282 21.2549 20.428 21.2549 20.4278 21.2549L20.429 21.0549M20.4284 21.2549H20.429V21.0549M20.4284 21.2549H13.9781M20.429 21.0549H13.8112M13.9781 21.2549C13.9899 21.1989 14.0002 21.1422 14.0089 21.085L13.8112 21.0549M13.9781 21.2549C13.6832 22.6549 12.4456 23.67 11.0001 23.67C9.55459 23.67 8.31709 22.6549 8.02208 21.2549M13.9781 21.2549H13.8112V21.0549M13.8112 21.0549L8.02208 21.2549M8.02208 21.2549H8.18896V21.0549L7.99125 21.0851C7.99999 21.1423 8.01028 21.1989 8.02208 21.2549ZM8.02208 21.2549H1.57172M1.57172 21.2549C1.57195 21.2549 1.57218 21.2549 1.57241 21.2549L1.57118 21.0549V21.2549H1.57172ZM12.7285 21.2549C12.4747 21.9799 11.7867 22.4798 11.0001 22.4798H11C10.2133 22.4798 9.52539 21.9799 9.27157 21.2549H12.7285ZM5.51233 10.4924L5.51233 10.4921C5.51037 8.98893 6.12478 7.55137 7.21241 6.51489L7.21249 6.51481C8.2998 5.47745 9.76426 4.93259 11.2651 5.00474C12.6959 5.09328 14.0376 5.73143 15.0099 6.78408L15.0099 6.78409C15.9834 7.83803 16.5119 9.2253 16.4874 10.6596L16.4873 10.6596V10.663L16.4873 12.5961C16.4873 12.5962 16.4873 12.5963 16.4873 12.5964C16.4786 15.3045 17.3944 17.9297 19.0743 20.0424H2.92542C4.60545 17.9296 5.52131 15.3045 5.51233 12.5964L5.51233 10.4924ZM11.0001 1.75485C11.4119 1.75485 11.7837 2.00277 11.9416 2.38396C12.0986 2.76431 12.012 3.20235 11.7209 3.49448C11.4287 3.7856 10.9906 3.87214 10.6103 3.71506C10.2292 3.5571 9.98134 3.1853 9.98134 2.7736C9.98134 2.21071 10.4372 1.75485 11.0001 1.75485Z"
                                    fill="#213F7D"
                                    stroke="#213F7D"
                                    strokeWidth="0.4"
                                />
                            </svg>
                        </button>
                        <button
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={
                                open ? "composition-menu" : undefined
                            }
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            className="right__dropDown d-flex align-items-center justify-content-between"
                        >
                            <div className="dropDown__avatar">
                                <img src={Avatar} alt="avatar" />
                            </div>
                            <p className="userName d-none ">Adedeji</p>
                            <div className="dropArrow d-none ">
                                <svg
                                    width="8"
                                    height="5"
                                    viewBox="0 0 8 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z"
                                        fill="#213F7D"
                                    />
                                </svg>
                            </div>
                        </button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="top-end"
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === "bottom-start"
                                                ? "left top"
                                                : "left bottom",
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener
                                            onClickAway={handleClose}
                                        >
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    Profile
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    My account
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    Logout
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </nav>
            </AppBar>
        </>
    );
};

export default Bar;
