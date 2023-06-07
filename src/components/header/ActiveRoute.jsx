/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const ActiveRoute = ({ to, children, ...rest }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "hover:text-[#e6a7a7] font-semibold text-black bg-white uppercase p-2 rounded"
                    : "text-white font-semibold hover:text-[#e6a7a7] uppercase"
            }
            {...rest}
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;
