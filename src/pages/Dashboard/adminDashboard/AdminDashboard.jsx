import { useState } from "react";
import { BiHome } from "react-icons/bi";
import ManageClasses from "./ManageClasses";
import ManageUsers from "./ManageUsers";

const AdminDashboard = ({ adminData }) => {
    const [activeTab, setActiveTab] = useState("mc");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="dashboard min-h-screen">
            {/* Left-side Navbar */}
            <nav className="bg-[rgba(0,0,0,0.2)] sm:ps-5 flex flex-col xs:flex-row sm:flex-col justify-center items-center xs:items-start sm:justify-start gap-5 sm:gap-0 py-4">
                <a
                    href="/"
                    className="text-white flex sm:mb-8 gap-3 hover:text-[#F79F1F]"
                >
                    <BiHome size={24} /> Home
                </a>
                <a
                    className={`text-white sm:mb-8 hover:text-[#F79F1F] py-1 px-1 rounded cursor-pointer ${
                        activeTab == "mc" && "bg-[#1B1464]"
                    }`}
                    onClick={() => handleTabClick("mc")}
                >
                    Manage Classes
                </a>
                <a
                    className={`text-white sm:mb-8 hover:text-[#F79F1F] py-1 px-1 rounded cursor-pointer ${
                        activeTab == "mu" && "bg-[#1B1464]"
                    }`}
                    onClick={() => handleTabClick("mu")}
                >
                    Manage Users
                </a>
            </nav>

            {/* Main Content */}
            <main className="bg-[rgba(0,0,0,0.4)] p-6">
                {activeTab == "mc" && <ManageClasses />}
                {activeTab == "mu" && (
                    <ManageUsers adminEmail={adminData.email} />
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
