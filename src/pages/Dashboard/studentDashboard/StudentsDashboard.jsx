import { useState } from "react";
import { BiHome } from "react-icons/bi";
import EnrolledClasses from "./EnrolledClasses";
import SelectedClasses from "./SelectedClasses";

const StudentsDashboard = ({ studentData }) => {
    const [activeTab, setActiveTab] = useState("msc");
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
                    className={`text-white sm:mb-8 hover:text-[#F79F1F] py-1 px-1 rounded cursor-pointer ${
                        activeTab == "msc" && "bg-[#1B1464]"
                    }`}
                    onClick={() => handleTabClick("msc")}
                >
                    My Selected Classes
                </a>
                <a
                    className={`text-white sm:mb-8 hover:text-[#F79F1F] py-1 px-1 rounded cursor-pointer ${
                        activeTab == "mec" && "bg-[#1B1464]"
                    }`}
                    onClick={() => handleTabClick("mec")}
                >
                    My Enrolled Classes
                </a>
            </nav>

            {/* Main Content */}
            <div className="bg-[rgba(0,0,0,0.4)] p-6 overflow-auto ">
                {activeTab == "msc" && (
                    <SelectedClasses
                        classesID={studentData.selectedClasses || []}
                        email={studentData.email}
                    />
                )}
                {activeTab == "mec" && (
                    <EnrolledClasses
                        classesID={studentData.enrolledClasses || []}
                        email={studentData.email}
                    />
                )}
            </div>
        </div>
    );
};

export default StudentsDashboard;
