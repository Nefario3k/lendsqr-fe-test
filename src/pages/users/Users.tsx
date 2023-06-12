import Stats from "../../components/user/Stats";
import Table from "../../components/tables/User";

const users = () => {
    return (
        <div className="transIn content">
            <h3 className="title">Users</h3>
            <Stats />
            <Table />
        </div>
    );
};

export default users;
