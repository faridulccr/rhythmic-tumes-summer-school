import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/others/signup2.gif";
import Input from "../../components/input/Input";
import SocialMediaSignIn from "../../components/social-media-signin/SocialMediaSignIn";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import "../Login/Login.style.css";

const SignUp = () => {
    useTitle("Sign-up");
    const { signUp } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signUp(email, password, userName);
            navigate(location.state?.from || "/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="sign-up-page flex justify-center items-center">
            <div className="sign-up-form grid sm:grid-cols-2 gap-5 items-center py-5 my-10">
                <div className="sm:ps-3 px-5 sm:px-0 md:ps-14 lg:ps-20">
                    <h1 className="text-3xl font-bold text-center text-[#D1A054]">
                        Sign up now!
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="name"
                            label="Name"
                            placeholder="Type here"
                        />
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Type here"
                        />
                        <Input
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                        />
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-[#D1A054] text-white hover:bg-[#060330]"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    {/* new account and social media icon */}
                    <div className="text-center">
                        <p className="text-[#D1A054] font-semibold text-lg my-3">
                            Already registered?{" "}
                            <Link to="/login" className="font-bold">
                                Go to log in
                            </Link>
                        </p>
                        <p className="font-semibold text-white">
                            Or sign up with
                        </p>
                        <SocialMediaSignIn />
                    </div>
                </div>
                <img
                    className="hidden sm:block h-auto w-full md:w-3/4 mx-auto rounded-[50%]"
                    src={img}
                    alt=""
                />
            </div>
        </div>
    );
};

export default SignUp;
