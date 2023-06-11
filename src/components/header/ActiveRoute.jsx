/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const ActiveRoute = ({ to, children, ...rest }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "hover:text-[#ED4C67] font-semibold text-[#FFC312] bg-[#1B1464] uppercase p-2 rounded"
                    : "text-white font-semibold hover:text-[#ED4C67] uppercase"
            }
            {...rest}
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;
