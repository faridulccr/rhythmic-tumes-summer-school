import profile from "../../assets/others/profile.png";
import { useAuth } from "../../providers/AuthProvider";
import "./Account.style.css";
import ActiveRoute from "./ActiveRoute";

const Account = () => {
    const { currentUser, logout } = useAuth();
    // console.log(currentUser?.email);

    return currentUser ? (
        <div className="account">
            <img
                className="account-logo"
                src={currentUser?.photoURL || profile}
                title={currentUser?.displayName}
            />
            <button
                className="text-white font-semibold hover:text-pink-300"
                onClick={logout}
            >
                LOG OUT
            </button>
        </div>
    ) : (
        <ActiveRoute
            className=" bg-sky-700 p-4 rounded-md text-white font-bold"
            to="/login"
        >
            LOG IN
        </ActiveRoute>
    );
};

export default Account;
