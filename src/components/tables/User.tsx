import { useEffect, useState, ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
import action from "../../assets/svg/action.svg";
import { setDate, sortPagination } from "../../util/User";
import Loading from "../../components/Loading";
import IUser from "../../interface/IUser";
const Table = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(false);
    const USERPERPAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [lowRange, highRange] = sortPagination(currentPage, USERPERPAGE);
    const handleButtonNavigation = (dir: string) => {
        if (dir === "left") {
            if (lowRange <= 0) return;
            setCurrentPage((el) => el - 1);
        }
        if (dir === "right") {
            if (highRange >= users.length) return;
            setCurrentPage((el) => el + 1);
        }
    };

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            fetch(
                "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
            )
                .then((users) => users.json())
                .then((users) => {
                    setLoading(false);
                    setUsers(users);
                })
                .catch((err) => console.log(err));
        };
        getUsers();
    }, []);

    function getPageNumber() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / USERPERPAGE); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    const handleSelectPage = (e: ChangeEvent<HTMLElement>) => {
        const target = e.target as HTMLSelectElement;
        setCurrentPage(+target.value);
    };

    const handlePageClick = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };

    if (loading) {
        return <Loading />;
    }
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
                {
                    name: "Lendsqr",
                    username: "Adedeji",
                    email: "adedeji@lendsqr.com",
                    phone: "08078903721",
                    date: "May 15, 2020 10:00 AM",
                    status: "pending",
                },
                {
                    name: "Lendsqr",
                    username: "Adedeji",
                    email: "adedeji@lendsqr.com",
                    phone: "08078903721",
                    date: "May 15, 2020 10:00 AM",
                    status: "blacklisted",
                },
                {
                    name: "Lendsqr",
                    username: "Adedeji",
                    email: "adedeji@lendsqr.com",
                    phone: "08078903721",
                    date: "May 15, 2020 10:00 AM",
                    status: "active",
                },
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
                <th key={id + 233223233}>
                    <div>
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
                    </div>
                </th>
            </>
        );
    });

    // body
    const tbody = users.slice(lowRange, highRange).map((element) => {
        return (
            <>
                <tr key={element.id + 233424}>
                    {/* organization name  */}
                    <td>{element.orgName}</td>
                    {/* username  */}
                    <td>{element.userName}</td>
                    {/* email  */}
                    <td>
                        <a href={`mailto:${element.email}`}>{element.email}</a>
                    </td>
                    {/* phoneNumber */}
                    <td>
                        <a href={`tel:${element.phoneNumber}`}>
                            {element.phoneNumber}
                        </a>
                    </td>
                    {/* date  */}
                    <td>{setDate(element.createdAt)}</td>
                    {/* status  */}
                    <td
                        className={`chip ${
                            element.status ? element.status : "inactive"
                        }`}
                    >
                        <span>
                            {element.status ? element.status : "inactive"}
                        </span>
                    </td>
                    {/* action button  */}
                    <td>
                        <div className="table__action">
                            <img src={action} alt="action" />
                        </div>
                    </td>
                </tr>
            </>
        );
    });

    // return table
    return (
        <>
            <div className="table__card">
                <table className="filterTable">
                    <thead>
                        <tr>{thead}</tr>
                    </thead>
                    <tbody>{tbody}</tbody>
                </table>
            </div>
            <div className="pagination">
                <div className="left">
                    <span>Showing</span>
                    <select
                        name="paginate"
                        id="paginate"
                        value={currentPage}
                        onChange={(e) => handleSelectPage(e)}
                    >
                        {getPageNumber().map((pageNumber) => (
                            <option key={pageNumber} value={pageNumber}>
                                {pageNumber}
                            </option>
                        ))}
                    </select>
                    <span>out of 100</span>
                </div>
                <div className="right">
                    {/* control left  */}
                    <button
                        className="ctrl"
                        onClick={() => handleButtonNavigation("left")}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="24"
                                height="24"
                                rx="4"
                                fill="#213F7D"
                                fillOpacity="0.1"
                            />
                            {/* <g opacity="0.6"> */}
                            <path
                                d="M15.0061 16.0573C15.8472 16.8984 14.5434 18.1595 13.745 17.3184L8.99424 12.5676C8.61581 12.2313 8.61581 11.6428 8.99424 11.3065L13.6186 6.64002C14.4597 5.84104 15.7208 7.10267 14.8797 7.94322L10.8859 11.937L15.0061 16.0573Z"
                                fill="#213F7D"
                            />
                            {/* </g> */}
                        </svg>
                    </button>
                    {/* pagination  */}
                    <Pagination
                        count={USERPERPAGE}
                        page={currentPage}
                        onChange={handlePageClick}
                        size="small"
                        hideNextButton={true}
                        hidePrevButton={true}
                    />
                    {/* control right  */}
                    <button
                        className="ctrl"
                        onClick={() => handleButtonNavigation("right")}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="24"
                                height="24"
                                rx="4"
                                fill="#213F7D"
                                fillOpacity="0.1"
                            />
                            <path
                                d="M8.99391 7.94274C8.15281 7.10165 9.45656 5.8405 10.255 6.68165L15.0058 11.4324C15.3842 11.7687 15.3842 12.3572 15.0058 12.6935L10.3814 17.36C9.54033 18.159 8.27918 16.8973 9.12033 16.0568L13.1141 12.063L8.99391 7.94274Z"
                                fill="#213F7D"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Table;
