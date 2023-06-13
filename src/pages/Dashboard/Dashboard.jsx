import useTitle from "../../hooks/useTitle";
import useUserInfo from "../../hooks/useUserInfo";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";
import StudentsDashboard from "./StudentsDashboard";

const Dashboard = () => {
    useTitle("dashboard");
    const [userData, loading] = useUserInfo();
    const userRole = userData.role;

    return (
        <div className="max-w-screen-xl mx-auto">
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
