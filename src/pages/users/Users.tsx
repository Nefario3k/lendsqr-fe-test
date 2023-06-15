import Stats from "../../components/user/Stats";
import USERTABLE from "../../components/tables/User";

const users = () => {
    return (
        <div className="transIn content">
            <h3 className="title">Users</h3>
            <Stats />
            <USERTABLE />
        </div>
    );
};

export default users;
