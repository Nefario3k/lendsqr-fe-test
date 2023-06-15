import { NavLink, useLocation } from "react-router-dom";
import Pathlist from "./PathList";
import logout from "../../assets/svg/icons/logout.svg";
const Panel = (props: any) => {
    const location = useLocation().pathname;
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
                                                    <span>{element.title}</span>
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
                            </div>
                        );
                    }
                })}
                {/* divider  */}
                <hr className="divider" />
                {/* logout  */}
                <div>
                    <ul className="logout">
                        <li>
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
