import { Navigate, Outlet } from "react-router-dom";
import Header from "../ui/Header";


const AuthLayout = () => {
    return <>
        <Header />
        <Outlet/>
    </>
};

export default AuthLayout;