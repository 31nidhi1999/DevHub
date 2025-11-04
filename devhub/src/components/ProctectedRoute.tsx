import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../app/store";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticate
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
