import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Pathlist from "./PathList";
import logout from "../../assets/svg/icons/logout.svg";
const Panel = (props: any) => {
    let navigate = useNavigate();
    const location = useLocation().pathname;
    console.log(location);
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
            <menu className="panel">
                {/* navigation  */}
                {Object.entries(Pathlist).map(([key, value]) => {
                    // !panel dropdown
                    if (key !== "dropDown") {
                        return (
                            <div key={key}>
                                {key !== "dashboard" ? (
                                    <p className="panel__tagLine">{key}</p>
                                ) : (
                                    ""
                                )}
                                <ul className={key}>
                                    {value.map((element, id) => {
                                        return (
                                            <li
                                                onClick={props.onClose}
                                                key={id + 234 + element.path}
                                            >
                                                <NavLink
                                                    className={`panel__link d-flex align-items-center w-100 ${
                                                        location ===
                                                        element.path
                                                            ? "navActive"
                                                            : ""
                                                    }`}
                                                    to={element.path}
                                                >
                                                    <img
                                                        src={element.icon}
                                                        alt={element.title}
                                                    />
                                                    <span>{element.title}</span>
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    } else {
                        /* panel dropDown  */
                        return (
                            <div key={key}>
                                <button
                                    className="dropDownBtn"
                                    ref={anchorRef}
                                    id="composition-button"
                                    aria-controls={
                                        open ? "composition-menu" : undefined
                                    }
                                    aria-expanded={open ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                >
                                    <ul className={key}>
                                        {value.map((element, id) => {
                                            return (
                                                <li
                                                    className="dropDown relative"
                                                    key={id + 2333353636}
                                                >
                                                    <div className="panel__link noHover d-flex align-items-center w-100">
                                                        <img
                                                            src={element.icon}
                                                            alt={element.title}
                                                        />
                                                        <span>
                                                            {element.title}
                                                        </span>
                                                        <svg
                                                            width="12"
                                                            height="8"
                                                            viewBox="0 0 12 8"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M10.0573 0.993798C10.8984 0.152706 12.1595 1.45646 11.3184 2.25489L6.56759 7.00565C6.23127 7.38408 5.64282 7.38408 5.3065 7.00565L0.640017 2.38131C-0.158963 1.54022 1.10267 0.27907 1.94322 1.12022L5.937 5.114L10.0573 0.993798Z"
                                                                fill="#213F7D"
                                                            />
                                                        </svg>
                                                    </div>
                                                    {/* dropdown  */}
                                                    {/* <ul className="absolute">
                                                        <li>
                                                            <div className="panel__link d-flex align-items-center w-100">
                                                                <span>
                                                                    lendersSqr
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="panel__link d-flex align-items-center w-100">
                                                                <span>
                                                                    lendersSqr
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="panel__link d-flex align-items-center w-100">
                                                                <span>
                                                                    lendersSqr
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="panel__link d-flex align-items-center w-100">
                                                                <span>
                                                                    lendersSqr
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </ul> */}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </button>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom-end"
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
                                                        onKeyDown={
                                                            handleListKeyDown
                                                        }
                                                    >
                                                        <MenuItem
                                                            onClick={
                                                                handleClose
                                                            }
                                                        >
                                                            Profile
                                                        </MenuItem>
                                                        <MenuItem
                                                            onClick={
                                                                handleClose
                                                            }
                                                        >
                                                            My account
                                                        </MenuItem>
                                                        <MenuItem
                                                            onClick={
                                                                handleClose
                                                            }
                                                        >
                                                            Logout
                                                        </MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        );
                    }
                })}
                {/* divider  */}
                <hr className="divider" />
                {/* logout  */}
                <div>
                    <ul className="logout">
                        <li
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            <NavLink
                                className="panel__link d-flex align-items-center w-100"
                                to="/"
                            >
                                <img src={logout} alt="logout" />
                                <span>logout</span>
                            </NavLink>
                        </li>
                    </ul>
                    {/* version  */}
                    <p className="panel__tagLine version">v1.2.0</p>
                </div>
            </menu>
        </>
    );
};

export default Panel;
