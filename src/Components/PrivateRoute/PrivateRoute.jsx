/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import UseAuth from "../../ContexHooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loding } = UseAuth();

  console.log(loding);

  if(loding) return <div className="flex justify-center items-center h-screen"><h1 className="text-7xl">Loding...</h1></div>

  if (!user) {
    return <Navigate to="/login" />
  }

  return children;
};

export default PrivateRoute;
