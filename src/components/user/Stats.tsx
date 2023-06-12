import Card from "../../components/Card";
// icons
import activeUser from "../../assets/svg/card/activeUser.svg";
import loan from "../../assets/svg/card/loan.svg";
import savings from "../../assets/svg/card/savings.svg";
import user from "../../assets/svg/card/user.svg";
const Stats = () => {
    let formatNumber = (num: Number) => {
        return num.toLocaleString("en-US", {
            style: "decimal",
        });
    };
    let stat: any;
    stat = [
        {
            id: 10,
            src: user,
            title: "users",
            value: formatNumber(2453),
        },
        {
            id: 11,
            src: activeUser,
            title: "active users",
            value: formatNumber(2453),
        },
        {
            id: 12,
            src: loan,
            title: "Users with Loans",
            value: formatNumber(12453),
        },
        {
            id: 13,
            src: savings,
            title: "Users with Savings",
            value: formatNumber(102453),
        },
    ];

    const statistics = stat.map((element: any) => {
        return <Card key={element.id} cardData={element} />;
    });

    return <div className="row statsCard">{statistics}</div>;
};

export default Stats;
