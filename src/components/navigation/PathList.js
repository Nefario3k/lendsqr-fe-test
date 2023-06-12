// icons
// decided to ue icons from the figma file instead of a packagae beacuse they were well curated
import Case from "../../assets/svg/icons/briefcase.svg";
import Home from "../../assets/svg/icons/home.svg";
import Users from "../../assets/svg/icons/users.svg";
import People from "../../assets/svg/icons/people.svg";
import Loan from "../../assets/svg/icons/loan.svg";
import Decision from "../../assets/svg/icons/decision.svg";
import Savings from "../../assets/svg/icons/savings.svg";
import LoanRequest from "../../assets/svg/icons/loanRequest.svg";
import Whitelist from "../../assets/svg/icons/whitelist.svg";
import Karma from "../../assets/svg/icons/karma.svg";
let PathList = {
    customers: [
        { title: "users", icon: Users, path: "/dashboard/users" },
        { title: "Guarantors", icon: People, path: "/dashboard/gurantors" },
        { title: "Loans", icon: Loan, path: "/dashboard/loan" },
        {
            title: "Decision Models",
            icon: Decision,
            path: "/dashboard/models",
        },
        { title: "Savings", icon: Savings, path: "/dashboard/savings" },
        {
            title: "Loan Requests",
            icon: LoanRequest,
            path: "/dashboard/loan-request",
        },
        {
            title: "Whitelist",
            icon: Whitelist,
            path: "/dashboard/whitelist",
        },
        {
            title: "Karma",
            icon: Karma,
            path: "/dashboard/karma",
        },
    ],
};

export default PathList;
