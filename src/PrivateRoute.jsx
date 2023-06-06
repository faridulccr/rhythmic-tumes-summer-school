import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
    const currenLocation = useLocation();

    return currentUser ? (
        children
    ) : (
        <Navigate
            to="/login"
            state={{ from: currenLocation.pathname }}
            replace
        />
    );
};
export default PrivateRoute;
