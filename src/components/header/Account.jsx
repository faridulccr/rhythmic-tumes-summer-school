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
                    className="text-[#03307e] bg-[#e0e7e0] hover:bg-[#a3a5a3] font-semibold hover:text-[#fff] p-4 rounded-md"
                    onClick={logout}
                >
                    LOG OUT
                </button>
            </div>
        </>
    ) : (
        <ActiveRoute
            className=" hover:bg-[#a3a5a3] bg-[#e0e7e0] p-4 rounded-md text-[#03307e] hover:text-[#fff] font-bold"
            to="/login"
        >
            LOG IN
        </ActiveRoute>
    );
};

export default Account;
