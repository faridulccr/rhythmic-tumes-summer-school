import { useState } from "react";
import { BiHome } from "react-icons/bi";

const InstructorDashboard = ({ instructorData }) => {
    const [activeTab, setActiveTab] = useState("selected-classes");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="dashboard h-screen">
            {/* Left-side Navbar */}
            <nav className="bg-[rgba(0,0,0,0.2)] sm:ps-5 flex flex-col xs:flex-row sm:flex-col justify-center items-center xs:items-start sm:justify-start gap-5 sm:gap-0 py-4">
                <a
                    href="/"
                    className="text-white flex sm:mb-8 gap-3 hover:text-[#F79F1F]"
                >
                    <BiHome size={24} /> Home
                </a>
                <a
                    href="#"
                    className="text-white sm:mb-8 hover:text-[#F79F1F]"
                    onClick={() => handleTabClick("selected-classes")}
                >
                    My Selected Classes
                </a>
                <a
                    href="#"
                    className="text-white sm:mb-8 hover:text-[#F79F1F]"
                    onClick={() => handleTabClick("enrolled-classes")}
                >
                    My Enrolled Classes
                </a>
            </nav>

            {/* Main Content */}
            <main className="bg-[rgba(0,0,0,0.4)] p-6">
                {activeTab == "selected-classes" && (
                    <div>My selected-classes</div>
                )}
                {activeTab == "enrolled-classes" && (
                    <div>My enrolled-classes</div>
                )}
            </main>
        </div>
    );
};

export default InstructorDashboard;
