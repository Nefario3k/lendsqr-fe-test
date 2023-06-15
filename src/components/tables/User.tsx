import * as React from "react";
import Pagination from "@mui/material/Pagination";
import action from "../../assets/svg/action.svg";
import { setDate, sortPagination } from "../../util/User";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import IUser from "../../interface/IUser";

// mui

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// figma icons
import eye from "../../assets/svg/menu/eye.svg";
import yeetuser from "../../assets/svg/menu/yeetuser.svg";
import unyeetuser from "../../assets/svg/menu/unyeetuser.svg";
import Form from "./TableForm";

const USERTABLE = () => {
    const [users, setUsers] = React.useState<IUser[]>([]);
    const [loading, setLoading] = React.useState(false);
    const USERPERPAGE = 10;
    const [currentPage, setCurrentPage] = React.useState(1);
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
    // dropdown
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorHeaderEl, setAnchorHeaderEl] =
        React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const openHeader = Boolean(anchorHeaderEl);
    const handleDropDownClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDropDownClose = () => {
        setAnchorEl(null);
    };
    const handleHeaderClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorHeaderEl(event.currentTarget);
    };
    const handleHeaderClose = () => {
        setAnchorHeaderEl(null);
    };

    React.useEffect(() => {
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

    const handleSelectPage = (e: React.ChangeEvent<HTMLElement>) => {
        const target = e.target as HTMLSelectElement;
        setCurrentPage(+target.value);
    };

    const handlePageClick = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };

    const loaders = () => {
        var load = [];
        for (var i = 0; i < 17; i++) {
            load.push(
                <Skeleton
                    key={i + 2323232424}
                    animation="wave"
                    variant="rounded"
                    width="100%"
                    height={60}
                />
            );
        }
        return load;
    };

    if (loading) {
        return (
            <Stack spacing={3}>
                <Skeleton
                    animation="wave"
                    variant="rounded"
                    width="100%"
                    height={60}
                    style={{ marginTop: "2rem" }}
                />
                {loaders()}{" "}
            </Stack>
        );
    }

    // DATA
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
            <TableCell key={element.name}>
                <button
                    id={`btn${element.name}`}
                    aria-controls={
                        openHeader ? `btnMenu${element.name}` : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openHeader ? "true" : undefined}
                    onClick={handleHeaderClick}
                    className="filter"
                >
                    <span>{element.name}</span>
                    <div className="filter">
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
                    </div>
                </button>
                <Menu
                    id={`btnMenu${element.name}`}
                    anchorEl={anchorHeaderEl}
                    open={openHeader}
                    onClose={handleHeaderClose}
                    MenuListProps={{
                        "aria-labelledby": `btnMenu${element.name}`,
                    }}
                >
                    <MenuItem disableRipple={true}>
                        <Form handleHeaderClose={handleHeaderClose} />
                    </MenuItem>
                </Menu>
            </TableCell>
        );
    });

    // body
    const tbody = users.slice(lowRange, highRange).map((element) => {
        return (
            <TableRow key={element.id + element.userName}>
                {/* organization name  */}
                <TableCell>{element.orgName}</TableCell>
                {/* username  */}
                <TableCell>{element.userName}</TableCell>
                {/* email  */}
                <TableCell>
                    <a href={`mailto:${element.email}`}>{element.email}</a>
                </TableCell>
                {/* phoneNumber */}
                <TableCell>
                    <a href={`tel:${element.phoneNumber}`}>
                        {element.phoneNumber}
                    </a>
                </TableCell>
                {/* date  */}
                <TableCell>{setDate(element.createdAt)}</TableCell>
                {/* status  */}
                <TableCell
                    className={`chip ${
                        element.status ? element.status : "inactive"
                    }`}
                >
                    <span>{element.status ? element.status : "inactive"}</span>
                </TableCell>
                {/* action button  */}
                <TableCell>
                    <div className="table__action">
                        <button
                            id={`btn${element.id}`}
                            aria-controls={
                                openMenu ? `btnMenu${element.id}` : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleDropDownClick}
                        >
                            <img src={action} alt="action" />
                        </button>
                        <Menu
                            id={`btnMenu${element.id}`}
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleDropDownClose}
                            MenuListProps={{
                                "aria-labelledby": `btnMenu${element.id}`,
                            }}
                        >
                            <MenuItem onClick={handleDropDownClose}>
                                <div className="Menu__list__item">
                                    <img src={eye} alt="View Details" />
                                    <span>View Details</span>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={handleDropDownClose}>
                                <div className="Menu__list__item">
                                    <img src={yeetuser} alt="Blacklist User" />
                                    <span>Blacklist User</span>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={handleDropDownClose}>
                                <div className="Menu__list__item">
                                    <img src={unyeetuser} alt="Activate User" />
                                    <span>Activate User</span>
                                </div>
                            </MenuItem>
                        </Menu>
                    </div>
                </TableCell>
            </TableRow>
        );
    });

    // return table
    return (
        <>
            <div className="table__card">
                <TableContainer component={Paper}>
                    <Table className="filterTable">
                        <TableHead>
                            <TableRow>{thead}</TableRow>
                        </TableHead>
                        <TableBody>{tbody}</TableBody>
                    </Table>
                </TableContainer>
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
                            <option key={pageNumber + 34343} value={pageNumber}>
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

export default USERTABLE;
