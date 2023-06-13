import useTitle from "../../hooks/useTitle";
import useUserInfo from "../../hooks/useUserInfo";
import "./Dashboard.style.css";
import AdminDashboard from "./adminDashboard/AdminDashboard";
import InstructorDashboard from "./instructorDashboard/InstructorDashboard";
import StudentsDashboard from "./studentDashboard/StudentsDashboard";

const Dashboard = () => {
    useTitle("dashboard");
    const [userData, loading] = useUserInfo();
    const userRole = userData.role;

    return (
        <div className="max-w-screen-xl mx-auto pt-24">
            {loading && (
                <div className="h-[80vh] flex items-center justify-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            )}
            {!loading &&
                (userRole === "superAdmin" || userRole === "admin") && (
                    <AdminDashboard adminData={userData} />
                )}
            {!loading && userRole === "instructor" && (
                <InstructorDashboard instructorData={userData} />
            )}
            {!loading && userRole === "student" && (
                <StudentsDashboard studentData={userData} />
            )}
        </div>
    );
};

export default Dashboard;
