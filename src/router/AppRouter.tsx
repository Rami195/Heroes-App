import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../components/screens/login/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useAppSelector } from "../redux/hocks/redux";

export const AppRouter = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  return (
    <Routes>
    
      {isLogged ? (
        <Route path="/*" element={<ProtectedRoutes />} />
      ) : (
        <Route path="/*" element={<Navigate to={"/Login"} />} />
      )}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
