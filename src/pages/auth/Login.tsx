import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import LoginSvg from "../../assets/svg/login.svg";
import LogoSvg from "../../assets/svg/sizedLogo.svg";
const Login = () => {
    let navigate = useNavigate();
    const [formInput, setFormInput] = React.useState({
        email: "",
        password: "",
    });
    // handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        navigate("/dashboard/users");
    };

    const updateForm = (e: any) => {
        setFormInput((previousInput) => {
            const name = e.target.name;
            const values = e.target.value;
            return { ...previousInput, [name]: values };
        });
    };
    return (
        <section className="auth">
            <div className="row">
                <div className="col-12 col-md-6 auth__image relative justify-content-center align-items-center d-none d-md-flex">
                    <aside>
                        <img src={LoginSvg} alt="lendsqr login" />
                    </aside>

                    <div className="absolute image__logo">
                        <img src={LogoSvg} alt="Logo" />
                    </div>
                </div>
                <div className="col-12 col-md-6 auth__content d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit} className="content__login">
                        <div className=" d-md-none d-block image__logo">
                            <img src={LogoSvg} alt="Logo" />
                        </div>
                        <header>
                            <h3>Welcome!</h3>
                            <p className="login__text">
                                Enter details to login.
                            </p>
                        </header>
                        <div className="login__inputs">
                            <input
                                onChange={(e) => {
                                    updateForm(e);
                                }}
                                value={formInput.email}
                                name="email"
                                type="email"
                                required
                                placeholder="email"
                            />
                        </div>
                        <div className="login__inputs relative">
                            <input
                                onChange={(e) => {
                                    updateForm(e);
                                }}
                                value={formInput.password}
                                name="password"
                                type="password"
                                required
                                placeholder="password"
                            />
                            <div className="inputs__checker absolute">
                                <span>show</span>
                            </div>
                        </div>

                        <Link to="/">Forgot PASSWORD?</Link>
                        <button
                            type="submit"
                            className="login__submit d-flex justify-center align-items-center text-center"
                        >
                            <span>log in</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
