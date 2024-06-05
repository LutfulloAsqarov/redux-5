import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <Link to={"/"}>
                    <IoArrowBack />
                    <span>Dashboard</span>
                </Link>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"createProduct"}>
                        <IoIosCreate />
                        <span>Create Product</span>
                    </NavLink>
                </li>
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"manageProduct"}>
                        <CiEdit />
                        <span>Manage Product</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
