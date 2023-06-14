import { useState } from "react";
import { BiHome } from "react-icons/bi";
import AddAClass from "./AddAClass";
import MyClasses from "./MyClasses";

const InstructorDashboard = ({ instructorData }) => {
    const [activeTab, setActiveTab] = useState("aac");
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
                        activeTab == "aac" && "bg-[#1B1464]"
                    }`}
                    onClick={() => handleTabClick("aac")}
                >
                    Add A Class
                </a>
                <a
                    className={`text-white sm:mb-8 hover:text-[#F79F1F] py-1 px-1 rounded cursor-pointer ${
                        activeTab == "mc" && "bg-[#1B1464]"
                    }`}
                    onClick={() => handleTabClick("mc")}
                >
                    My Classes
                </a>
            </nav>

            {/* Main Content */}
            <main className="bg-[rgba(0,0,0,0.4)] p-6 overflow-auto">
                {activeTab == "aac" && (
                    <AddAClass
                        email={instructorData.email}
                        name={instructorData.name}
                    />
                )}
                {activeTab == "mc" && (
                    <MyClasses email={instructorData.email} />
                )}
            </main>
        </div>
    );
};

export default InstructorDashboard;
