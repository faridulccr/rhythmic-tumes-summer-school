import { useLocation, useNavigate } from "react-router-dom";
import facebook from "../../assets/icon/facebook.png";
import github from "../../assets/icon/github.png";
import google from "../../assets/icon/google.png";
import { useAuth } from "../../providers/AuthProvider";

const SocialMediaSignIn = () => {
    const { facebookSignIn, googleSignIn, githubSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const signinWithFacebook = async () => {
        try {
            await facebookSignIn();
            navigate(location.state?.from || "/");
        } catch (error) {
            console.log(error);
        }
    };

    const signinWithGoogle = async () => {
        try {
            await googleSignIn();
            navigate(location.state?.from || "/");
        } catch (error) {
            console.log(error);
        }
    };
    const signinWithGithub = async () => {
        try {
            await githubSignIn();
            navigate(location.state?.from || "/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center gap-5 sm:gap-10 my-5">
            <img
                className="social-media"
                src={facebook}
                alt="facebook"
                title="facebook sign-in"
                onClick={signinWithFacebook}
            />
            <img
                className="social-media"
                src={google}
                alt="google"
                title="google sign-in"
                onClick={signinWithGoogle}
            />
            <img
                className="social-media"
                src={github}
                alt="github"
                title="github sign-in"
                onClick={signinWithGithub}
            />
        </div>
    );
};

export default SocialMediaSignIn;
