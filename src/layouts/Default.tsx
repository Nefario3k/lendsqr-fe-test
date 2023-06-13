import { Outlet } from "react-router-dom";
import Panel from "../components/navigation/Panel";
import Bar from "../components/navigation/Bar";
const Default = () => {
    return (
        <section className="pageContainer">
            <Bar />
            <Panel />
            <main className="container page__content">
                <Outlet />
            </main>
        </section>
    );
};

export default Default;
