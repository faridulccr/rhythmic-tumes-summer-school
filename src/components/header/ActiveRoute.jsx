/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const ActiveRoute = ({ to, children, ...rest }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-semibold hover:text-pink-300"
                    : "text-white font-semibold hover:text-pink-300"
            }
            {...rest}
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;
