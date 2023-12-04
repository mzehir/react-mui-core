import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthUseContext from "../hooks/AuthUseContext";
import { ROUTER } from "../utils/constants/routerConstant";

function AuthGuard({ children }) {
  let location = useLocation();
  const { isAuthenticated } = AuthUseContext();

  // if (!isAuthenticated) {
  //   return (
  //     <Navigate to={ROUTER.SIGN_IN.path} state={{ from: location }} replace />
  //   );
  // }

  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
