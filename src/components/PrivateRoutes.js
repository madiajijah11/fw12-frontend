import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

export default PrivateRoutes;
