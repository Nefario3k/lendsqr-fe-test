import LoginSvg from "../../assets/svg/login.svg";
import LogoSvg from "../../assets/svg/sizedLogo.svg";
const Login = () => {
    return (
        <section className="auth">
            <div className="row">
                <div className="col-12 col-md-6 auth__image relative justify-center align-items-center d-none d-md-flex">
                    <aside>
                        <img src={LoginSvg} alt="lendsqr login" />
                    </aside>

                    <div className="absolute image__logo">
                        <img src={LogoSvg} alt="Logo" />
                    </div>
                </div>
                <div className="col-12 col-md-6 auth__content d-flex justify-center align-items-center">
                    <form className="content__login">
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
                            <input type="email" required placeholder="email" />
                        </div>
                        <div className="login__inputs relative">
                            <input
                                type="password"
                                required
                                placeholder="password"
                            />
                            <div className="inputs__checker absolute">
                                <span>show</span>
                            </div>
                        </div>

                        <a href="/">Forgot PASSWORD?</a>
                        <button className="login__submit d-flex justify-center align-items-center text-center">
                            <span>log in</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
