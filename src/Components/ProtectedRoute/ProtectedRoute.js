import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (element) => {
    const token = Cookies.get("token");
    if (token === undefined) {
        return <Navigate to="/login" />;
    }

    return element;
};
export default ProtectedRoute;