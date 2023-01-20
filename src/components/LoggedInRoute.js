import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function LoggedInRoute({ children }) {
  const token = useSelector((state) => state?.auth?.token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/signin" replace />;
  }
}

export default LoggedInRoute;
