import LogoImg from "../assets/images/logo.png";

const Loading = () => {
    return (
        <div className="container">
            <div
                className="wrapper"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img className="loading" src={LogoImg} alt="logo" />
            </div>
        </div>
    );
};

export default Loading;
