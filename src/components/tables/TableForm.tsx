const Form = (props: any) => {
    return (
        <form className="filterOptions row">
            <div className="col-12">
                <div>
                    <label htmlFor="org">Organization</label>
                    <select name="org" id="org">
                        <option defaultValue="Select">Select</option>
                        <option defaultValue="Select">Select</option>
                        <option defaultValue="Select">Select</option>
                        <option defaultValue="Select">Select</option>
                    </select>
                </div>
            </div>
            <div className="col-12">
                <div>
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" placeholder="User" />
                </div>
            </div>
            <div className="col-12">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email" />
                </div>
            </div>
            <div className="col-12">
                <div>
                    <label htmlFor="dateInput">Date</label>
                    <input type="date" id="dateInput" placeholder="Date" />
                </div>
            </div>
            <div className="col-12">
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="nymber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                    />
                </div>
            </div>
            <div className="col-12">
                <div>
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status">
                        <option defaultValue="Select">Select</option>
                        <option defaultValue="Select">Select</option>
                        <option defaultValue="Select">Select</option>
                        <option defaultValue="Select">Select</option>
                    </select>
                </div>
            </div>
            <div className="col-6">
                <div>
                    <button
                        onClick={props.handleHeaderClose}
                        type="button"
                        className="outlinedBtn"
                    >
                        <span>Reset</span>
                    </button>
                </div>
            </div>
            <div className="col-6">
                <div>
                    <button
                        onClick={props.handleHeaderClose}
                        type="button"
                        className="filterBtn"
                    >
                        <span>Filter</span>
                    </button>
                </div>
            </div>
        </form>
    );
};
export default Form;
