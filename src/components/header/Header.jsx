import { useEffect, useState } from "react";
import Account from "./Account";
import "./Account.style.css";
import ActiveRoute from "./ActiveRoute";

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [hide, setHide] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [isDark]);

    return (
        <header className="max-w-screen-xl mx-auto bg-[rgba(21,21,21,0.5)] h-20 fixed z-[9999999] w-full px-8 pt-3.5 md:pt-4">
            <nav>
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <a className="leading-tight" href="/">
                        <span className="font-[900] text-[.9rem] xs:text-[1.3rem] block text-white font-['Cinzel']">
                            Rhythmic Tunes
                        </span>
                        <span className="text-[#f7f7f7] uppercase tracking-[1.5px] text-[.8rem] xs:text-[1.2rem] font-[400] font-['Cinzel']">
                            Summer School
                        </span>
                    </a>
                    <button
                        onClick={() => setHide(!hide)}
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden bg-slate-600 hover:bg-slate-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className={`${
                            hide ? "hidden" : "block"
                        } w-full md:block bg-[#100427] dark:bg-gray-800 md:dark:bg-[rgba(21,21,21,0)] md:bg-[rgba(21,21,21,0)] md:w-auto px-8 md:px-0 py-4 md:py-0`}
                    >
                        <ul className="font-['Inter'] text-sm flex flex-col items-center md:flex-row gap-3 md:gap-6">
                            <li>
                                <ActiveRoute to="/">HOME</ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/instructors">
                                    Instructors
                                </ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/classes">Classes</ActiveRoute>
                            </li>
                            <Account />
                            <li
                                className={`cursor-pointer font-bold text-white md:text-${
                                    isDark ? "white" : "black"
                                }`}
                                onClick={() => setIsDark(!isDark)}
                            >
                                {isDark ? "Light Mode" : "Dark Mode"}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
