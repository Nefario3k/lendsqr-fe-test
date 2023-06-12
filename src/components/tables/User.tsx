import action from "../../assets/svg/action.svg";
const Table = () => {
    let data = () => {
        return {
            headers: [
                { name: "organization" },
                { name: "Username" },
                { name: "Email" },
                { name: "Phone number" },
                { name: "Date joined" },
                { name: "Status" },
            ],
            tableData: [
                {
                    name: "Lendsqr",
                    username: "Adedeji",
                    email: "adedeji@lendsqr.com",
                    phone: "08078903721",
                    date: "May 15, 2020 10:00 AM",
                    status: "inactive",
                },
            ],
        };
    };

    // header
    const thead = data().headers.map((element, id) => {
        return (
            <>
                <th key={id}>
                    <td>
                        <span>{element.name}</span>
                        <button className="filter">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                                    fill="#545F7D"
                                />
                            </svg>
                        </button>
                    </td>
                </th>
            </>
        );
    });

    // body
    const tbody = data().tableData.map((element, id) => {
        return (
            <>
                <tr key={id + 234}>
                    <td>{element.name}</td>
                    <td>{element.username}</td>
                    <td>
                        <a href={`mailto:${element.email}`}>{element.email}</a>
                    </td>
                    <td>
                        <a href={`tel:${element.phone}`}>{element.phone}</a>
                    </td>
                    <td>{element.date}</td>
                    <td className={element.status}>{element.status}</td>
                    <td>
                        <div className="table__action">
                            <img src={action} alt="action" />
                        </div>
                    </td>
                </tr>
            </>
        );
    });
    return (
        <div className="table__card">
            <table className="filterTable">
                <thead>{thead}</thead>
                <tbody>{tbody}</tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
};

export default Table;
