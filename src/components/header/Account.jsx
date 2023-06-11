import profile from "../../assets/others/profile.png";
import { useAuth } from "../../providers/AuthProvider";
import "./Account.style.css";
import ActiveRoute from "./ActiveRoute";

const Account = () => {
    const { currentUser, logout } = useAuth();
    // console.log(currentUser?.email);

    return currentUser ? (
        <>
            <ActiveRoute to="dashboard">DASHBOARD</ActiveRoute>
            <div className="account">
                <img
                    className="account-logo"
                    src={currentUser?.photoURL || profile}
                    title={currentUser?.displayName}
                />
                <button
                    className="text-[##6F1E51] bg-[#A3CB38] hover:bg-[#C4E538] font-semibold p-4 rounded-md"
                    onClick={logout}
                >
                    LOG OUT
                </button>
            </div>
        </>
    ) : (
        <ActiveRoute
            className=" hover:bg-[#C4E538] bg-[#A3CB38] p-4 rounded-md text-[#6F1E51] font-bold"
            to="/login"
        >
            LOG IN
        </ActiveRoute>
    );
};

export default Account;
