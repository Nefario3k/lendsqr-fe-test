import { Outlet } from "react-router-dom";
import Panel from "../../components/navigation/Panel";
import Bar from "../../components/navigation/Bar";
const Default = () => {
    return (
        <section className="pageContainer">
            <Bar />
            <Panel />
            <div className="page__content">
                <Outlet />
            </div>
        </section>
    );
};

export default Default;
