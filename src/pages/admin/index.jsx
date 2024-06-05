import React from "react";
import Sidebar from "../../components/sidebar";
import { Outlet } from "react-router-dom";
import "./admin.scss";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Admin;
