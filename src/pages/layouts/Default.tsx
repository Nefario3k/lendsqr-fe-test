import { Outlet } from "react-router-dom";
import Panel from "../../components/navigation/Panel";
import Bar from "../../components/navigation/Bar";
const Default = () => {
    return (
        <section className="pageContainer">
            <Bar />
            <section className="d-flex h-100">
                <Panel />
                <main className="container page__content">
                    <Outlet />
                </main>
            </section>
        </section>
    );
};

export default Default;
