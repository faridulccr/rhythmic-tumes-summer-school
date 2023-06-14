import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import eye_slash from "../../assets/icon/eye-slash-regular.svg";
import eye from "../../assets/icon/eye-solid.svg";
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
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, password, confirm_password, photoURL } = data;
        if (password !== confirm_password) {
            alert("Password must match with confirm password.");
            return;
        }

        try {
            await signUp(email, password, name, photoURL);
            createUserData(name, photoURL, email);
            navigate(location.state?.from || "/");
            console.log("Successfully Registered!");
        } catch (error) {
            alert("Registered Failed! Try again.");
            console.log(error);
        }
    };

    // create user in database
    async function createUserData(name, image, email) {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_RHYTHMIC_SERVER}/api/create-user`,
                JSON.stringify({
                    name,
                    image,
                    email,
                    role: "student",
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="sign-up-page flex justify-center items-center pt-5">
            <div className="sign-up-form grid sm:grid-cols-2 gap-5 items-center py-5 my-10">
                <div className="sm:ps-3 px-5 sm:px-0 md:ps-14 lg:ps-20">
                    <h1 className="text-3xl font-bold text-center text-[#D1A054]">
                        Register now!
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label="Name"
                            placeholder="Type here"
                            options={{
                                ...register("name", { required: true }),
                            }}
                        />
                        {errors.name?.type === "required" && (
                            <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                                Name is required
                            </span>
                        )}
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
                                ...register("password", {
                                    required: true,
                                    pattern:
                                        /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.]).{6,}$/,
                                    maxLength: 20,
                                }),
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
                        {errors.password?.type === "maxLength" && (
                            <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                                Password must be less than 20 character or equal
                            </span>
                        )}
                        {errors.password?.type === "pattern" && (
                            <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                                Password must be one Capital letter, one Special
                                Character and Minimum 6 Characters.
                            </span>
                        )}
                        <Input
                            className="relative"
                            type={hideConfirmPassword ? "password" : "text"}
                            label="Confirm Password"
                            placeholder="Enter again your password"
                            options={{
                                ...register("confirm_password", {
                                    required: true,
                                }),
                            }}
                        >
                            <img
                                onClick={() =>
                                    setHideConfirmPassword(!hideConfirmPassword)
                                }
                                className=" w-5 h-5 cursor-pointer absolute right-2 bottom-3"
                                src={hideConfirmPassword ? eye : eye_slash}
                                alt=""
                            />
                        </Input>
                        {errors.confirm_password?.type === "required" && (
                            <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                                Confirm Password is required
                            </span>
                        )}
                        <Input
                            label="Photo URL"
                            placeholder="Enter photo url"
                            options={{ ...register("photoURL") }}
                        />
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                className="btn bg-[#D1A054] text-white hover:bg-[#060330]"
                                value="Register"
                            />
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
                            Or Register with
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
