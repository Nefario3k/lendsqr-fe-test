import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import axios from "axios";
import Loading from "../../components/Loading";
import { Link, useParams, useNavigate } from "react-router-dom";
import IUser from "../../interface/IUser";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const User = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null);
    const { id } = useParams();

    useEffect(() => {
        // get user or make REQUEST
        const getUser = async () => {
            const userId = `user-${id}`;
            const storedUsersString = localStorage.getItem("users");
            const storedUsersMap = storedUsersString
                ? new Map(JSON.parse(storedUsersString))
                : new Map();

            if (storedUsersMap.has(userId)) {
                const data = storedUsersMap.get(userId);
                setUser(data as IUser);
            } else {
                const { data } = await axios.get(
                    ` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
                );
                storedUsersMap.set(userId, data);
                if (!data || !Object.keys(data).length) {
                    navigate("/dashboard/users");
                    return;
                }
                setUser(data);
            }

            localStorage.setItem(
                "users",
                JSON.stringify(Array.from(storedUsersMap.entries()))
            );
        };
        getUser();
    }, []);

    const loaders = () => {
        var load = [];
        for (var i = 0; i < 5; i++) {
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

    if (!user) {
        return (
            <Stack spacing={1}>
                <div className="loaders">
                    <Skeleton
                        animation="wave"
                        variant="circular"
                        width={100}
                        height={100}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={240}
                        height={60}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={240}
                        height={60}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={240}
                        height={60}
                    />
                </div>
                {loaders()}{" "}
            </Stack>
        );
    }

    return (
        <div className="transIn content">
            <div className="wrapper">
                <Link className="icon-container" to="/dashboard/users">
                    <div className="">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z"
                                fill="#545F7D"
                            />
                        </svg>
                    </div>
                    <span>Back to Users</span>
                </Link>
                <div className="header">
                    <h3 className="title">User Details</h3>
                    <div className="right">
                        <button>
                            <span>Blacklist User</span>
                        </button>
                        <button>
                            <span>Activate User</span>
                        </button>
                    </div>
                </div>
                <div className="card__container">
                    <div className="first-section">
                        {/* image  */}
                        {user?.profile.avatar && (
                            <div className="img-container">
                                <img
                                    src={user?.profile.avatar}
                                    alt={`${user?.userName} avatar`}
                                />
                            </div>
                        )}
                        {/* username */}
                        <div className="username">
                            <h3>{user?.userName}</h3>
                            <span>{user?.accountNumber}</span>
                        </div>
                        <div className="user-tier">
                            <span>User's Tier</span>
                            <div className="icon">
                                <IoIosStarOutline className="ico" />
                                <IoIosStarOutline className="ico" />
                                <IoIosStarOutline className="ico" />
                            </div>
                        </div>
                        <div className="user-amount">
                            <div className="user-amount-container">
                                <h3>₦{user?.accountBalance}</h3>
                                <span>{user?.orgName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-md-flex d-none tabs">
                        <button className="active">General Details</button>
                        <button>Document</button>
                        <button>Bank Details</button>
                        <button>Loan</button>
                        <button>Savings</button>
                        <button>App and System</button>
                    </div>
                    <div className="tabs d-md-none d-block px-0 pb-5">
                        <select name="" id="">
                            <option defaultValue="General Details">
                                General Details
                            </option>
                            <option defaultValue="Document">Document</option>
                            <option defaultValue="Bank Details">
                                Bank Details
                            </option>
                            <option defaultValue="Loan">Loan</option>
                            <option defaultValue="Savings">Savings</option>
                            <option defaultValue="Document">
                                App and System
                            </option>
                        </select>
                    </div>
                </div>
                <div className="card__container">
                    <div className="details">
                        <div className="detail">
                            {/* Personal Information  */}
                            <h3 className="title">Personal Information</h3>
                            <div className="details__container">
                                <div className="box">
                                    <span>FULL NAME</span>
                                    <h3>
                                        {user?.profile.firstName}{" "}
                                        {user?.profile.lastName}
                                    </h3>
                                </div>
                                <div className="box">
                                    <span>PHONE NUMBER</span>
                                    <h3>{user?.profile.phoneNumber}</h3>
                                </div>
                                <div className="box">
                                    <span>EMAIL ADDRESS</span>
                                    <h3>
                                        <a href={`mailto:${user?.email}`}>
                                            {user?.email}
                                        </a>
                                    </h3>
                                </div>
                                <div className="box">
                                    <span>BVN</span>
                                    <h3>{user?.profile.bvn}</h3>
                                </div>
                                <div className="box">
                                    <span>GENDER</span>
                                    <h3>{user?.profile.gender}</h3>
                                </div>
                                <div className="box">
                                    <span>MARITAL STATUS</span>
                                    <h3>Single</h3>
                                </div>
                                <div className="box">
                                    <span>CHILDREN</span>
                                    <h3>None</h3>
                                </div>
                                <div className="box">
                                    <span>TYPE OF RESIDENCE</span>
                                    <h3>{user?.profile.address}</h3>
                                </div>
                            </div>
                            {/* Education and Employment  */}
                            <h3 className="title">Education and Employment</h3>
                            <div className="details__container">
                                <div className="box">
                                    <span>LEVEL OF EDUCATION</span>
                                    <h3>{user?.education.level}</h3>
                                </div>
                                <div className="box">
                                    <span>Employment Status</span>
                                    <h3>{user?.education.employmentStatus}</h3>
                                </div>
                                <div className="box">
                                    <span>SECTOR OF EMPLOYMENT</span>
                                    <h3>{user?.education.sector}</h3>
                                </div>
                                <div className="box">
                                    <span>DURATION OF EMPLOYMENT</span>
                                    <h3>{user?.education.duration}</h3>
                                </div>
                                <div className="box">
                                    <span>OFFICE EMAIL</span>
                                    <h3>
                                        <a href={`mailto:grace@lendsqr.com`}>
                                            grace@lendsqr.com
                                        </a>
                                    </h3>
                                </div>
                                <div className="box">
                                    <span>MONTHLY INCONE</span>
                                    <h3>
                                        ₦{user?.education.monthlyIncome[0]} - ₦
                                        {user?.education.monthlyIncome[1]}
                                    </h3>
                                </div>
                                <div className="box">
                                    <span>LOAN REPAYMENT</span>
                                    <h3>{user?.education.loanRepayment}</h3>
                                </div>
                            </div>
                            {/* socials */}
                            <h3 className="title">Social</h3>
                            <div className="details__container">
                                <div className="box">
                                    <span>TWITTER</span>
                                    <h3>{user?.socials.twitter}</h3>
                                </div>
                                <div className="box">
                                    <span>FACEBOOK</span>
                                    <h3>{user?.socials.facebook}</h3>
                                </div>
                                <div className="box">
                                    <span>INSTAGRAM</span>
                                    <h3>{user?.socials.instagram}</h3>
                                </div>
                            </div>
                            {/* Guarantor */}
                            <h3 className="title">Guarantor</h3>
                            <div className="details__container">
                                <div className="box">
                                    <span>FULL NAME</span>
                                    <h3>
                                        {user?.guarantor.firstName}{" "}
                                        {user?.guarantor.lastName}
                                    </h3>
                                </div>
                                <div className="box">
                                    <span>PHONE NUMBER</span>
                                    <h3>
                                        <a
                                            href={`tel:+${user?.guarantor.phoneNumber}`}
                                        >
                                            {user?.guarantor.phoneNumber}
                                        </a>
                                    </h3>
                                </div>
                                <div className="box">
                                    <span>ADDRESS</span>
                                    <h3>{user?.guarantor.address}</h3>
                                </div>
                                <div className="box">
                                    <span>RELATIONSHIP</span>
                                    <h3>Sister</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
