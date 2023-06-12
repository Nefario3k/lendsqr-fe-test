// icons
// decided to ue icons from the figma file instead of a packagae beacuse they were well curated
import briefcase from "../../assets/svg/icons/briefcase.svg";
import home from "../../assets/svg/icons/home.svg";
import bank from "../../assets/svg/icons/bank.svg";
import users from "../../assets/svg/icons/users.svg";
import people from "../../assets/svg/icons/people.svg";
import loan from "../../assets/svg/icons/loan.svg";
import decision from "../../assets/svg/icons/decision.svg";
import savings from "../../assets/svg/icons/savings.svg";
import loanRequest from "../../assets/svg/icons/loanRequest.svg";
import whitelist from "../../assets/svg/icons/whitelist.svg";
import karma from "../../assets/svg/icons/karma.svg";
import coins from "../../assets/svg/icons/coins.svg";
import trans from "../../assets/svg/icons/trans.svg";
import vortex from "../../assets/svg/icons/vortex.svg";
import account from "../../assets/svg/icons/account.svg";
import deed from "../../assets/svg/icons/deed.svg";
import stats from "../../assets/svg/icons/stats.svg";
import sliders from "../../assets/svg/icons/sliders.svg";
import badge from "../../assets/svg/icons/badge.svg";
import clipboard from "../../assets/svg/icons/clipboard.svg";
import wheel from "../../assets/svg/icons/wheel.svg";
let PathList = {
    customers: [
        { title: "users", icon: users, path: "/dashboard/users" },
        { title: "Guarantors", icon: people, path: "/dashboard/guarantors" },
        { title: "Loans", icon: loan, path: "/dashboard/loan" },
        {
            title: "decision models",
            icon: decision,
            path: "/dashboard/models",
        },
        { title: "savings", icon: savings, path: "/dashboard/savings" },
        {
            title: "loan Requests",
            icon: loanRequest,
            path: "/dashboard/loan-request",
        },
        {
            title: "whitelist",
            icon: whitelist,
            path: "/dashboard/whitelist",
        },
        {
            title: "karma",
            icon: karma,
            path: "/dashboard/karma",
        },
    ],
    business: [
        { title: "Organization", icon: briefcase, path: "/dashboard/organization" },
        { title: "Loan Products", icon: loanRequest, path: "/dashboard/loan-request" },
        { title: "Savings Products", icon: bank, path: "/dashboard/loan" },
        {
            title: "Fees and Charges",
            icon: coins,
            path: "/dashboard/models",
        },
        { title: "Transactions", icon: trans, path: "/dashboard/Transactions" },
        {
            title: "Services",
            icon: vortex,
            path: "/dashboard/loan-request",
        },
        {
            title: "Service Account",
            icon: account,
            path: "/dashboard/whitelist",
        },
        {
            title: "Reports",
            icon: deed,
            path: "/dashboard/settlements",
        },
        {
            title: "Reports",
            icon: stats,
            path: "/dashboard/settlements",
        },
    ],
    settings: [
        { title: "Preferences", icon: sliders, path: "/dashboard/organization" },
        { title: "Fees and Pricing", icon: badge, path: "/dashboard/loan-request" },
        { title: "Audit Logs", icon: clipboard, path: "/dashboard/loan" },
        {
            title: "Systems Messages",
            icon: wheel,
            path: "/dashboard/models",
        },

    ],
};

export default PathList;
