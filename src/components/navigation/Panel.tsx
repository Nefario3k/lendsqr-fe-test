import { Link } from "react-router-dom";
import Pathlist from "../navigation/PathList";
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
                        <ul>
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
        </menu>
    );
};

export default Panel;
