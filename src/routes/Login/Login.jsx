import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import eye_slash from "../../assets/icon/eye-slash-regular.svg";
import eye from "../../assets/icon/eye-solid.svg";
import img from "../../assets/others/signup.png";
import Input from "../../components/input/Input";
import SocialMediaSignIn from "../../components/social-media-signin/SocialMediaSignIn";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import "./Login.style.css";

const Login = () => {
    useTitle("Login");
    const { login } = useAuth();
    const [hidePassword, setHidePassword] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            await login(email, password);
            navigate(location.state?.from || "/");
            alert("Successfully Logged in!");
        } catch (error) {
            alert(error.message);
            console.log(error);
        }
    };

    return (
        <div className="login-page flex justify-center items-center">
            <div className="login-form grid sm:grid-cols-2 gap-5 items-center py-5 my-10">
                <img
                    className="hidden sm:block h-auto w-full md:w-3/4 mx-auto"
                    src={img}
                    alt=""
                />
                <div className="sm:pr-3 px-5 sm:px-0 md:pr-14 lg:pr-20">
                    <h1 className="text-3xl font-bold text-center text-[#D1A054]">
                        Login now!
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="email"
                            label="Email"
                            placeholder="Type here"
                            options={{
                                ...register("email", { required: true }),
                            }}
                        />
                        {errors.email?.type === "required" && (
                            <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                                Email is required
                            </span>
                        )}
                        <Input
                            className="relative"
                            type={hidePassword ? "password" : "text"}
                            label="Password"
                            placeholder="Enter your password"
                            options={{
                                ...register("password", { required: true }),
                            }}
                        >
                            <img
                                onClick={() => setHidePassword(!hidePassword)}
                                className=" w-5 h-5 cursor-pointer absolute right-2 bottom-3"
                                src={hidePassword ? eye : eye_slash}
                                alt=""
                            />
                        </Input>
                        {errors.password?.type === "required" && (
                            <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                                Password is required
                            </span>
                        )}
                        <a
                            href="/"
                            className="label-text-alt link link-hover text-white"
                        >
                            Forgot password?
                        </a>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                className="btn bg-[#D1A054] text-white hover:bg-[#060330]"
                                value="Login in"
                            />
                        </div>
                    </form>
                    {/* new account and social media icon */}
                    <div className="text-center">
                        <p className="text-[#D1A054] font-semibold text-lg my-3">
                            New here?{" "}
                            <Link to="/sign-up" className="font-bold">
                                Register Now!
                            </Link>
                        </p>
                        <p className="font-semibold text-white">
                            Or sign in with
                        </p>
                        <SocialMediaSignIn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
