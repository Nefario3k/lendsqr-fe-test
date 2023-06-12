import { Link } from "react-router-dom";
import Pathlist from "../navigation/PathList";
import logout from "../../assets/svg/icons/logout.svg";
const Panel = () => {
    console.log(Pathlist);
    return (
        <menu className="panel">
            {Object.entries(Pathlist).map(([key, value]) => {
                return (
                    <>
                        <p className="panel__tagLine" key={key}>
                            {key}
                        </p>
                        <ul className={key}>
                            {value.map((element, id) => {
                                return (
                                    <>
                                        <li key={id}>
                                            <Link
                                                className="d-flex align-items-center w-100"
                                                to={element.path}
                                            >
                                                <img
                                                    src={element.icon}
                                                    alt={element.title}
                                                />
                                                <span>{element.title}</span>
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </>
                );
            })}
            <hr className="divider" />
            <ul className="logout">
                <li>
                    <Link className="d-flex align-items-center w-100" to="/">
                        <img src={logout} alt="logout" />
                        <span>logout</span>
                    </Link>
                </li>
            </ul>
            <p className="panel__tagLine version">v1.2.0</p>
        </menu>
    );
};

export default Panel;
