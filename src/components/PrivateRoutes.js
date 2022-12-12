import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function PrivateRoutes({ children }) {
  const token = useSelector((state) => state.auth.token);
  const decoded = token ? jwt_decode(token) : null;
  if (decoded) {
    return children;
  } else {
    return <Navigate to="/signin" replace />;
  }
}

export default PrivateRoutes;
