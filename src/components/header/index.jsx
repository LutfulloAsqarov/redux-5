import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import "./header.scss";
// useSelector - input

const Header = () => {
    let { pathname } = useLocation();

    if (pathname.includes("/admin")) {
        return <></>;
    }
    return (
        <header id="header">
            <div className="header container">
                <div className="header__logo">
                    <Link to={"/"}>Logo</Link>
                </div>
                <form className="header__form" action="">
                    <input type="text" placeholder="Search" />
                    <select name="" id="">
                        <option value="all-type">All type</option>
                        <option value="foods">Foods</option>
                        <option value="clothes">Clothes</option>
                        <option value="techniques">Techniques</option>
                    </select>
                    <div className="header__form__search-icon">
                        <IoSearchSharp />
                    </div>
                </form>
                <div className="header__nav">
                    <NavLink to={"/"} className={"header__link"}>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/wishlist"} className={"header__link"}>
                        <span>Wishlist</span>
                    </NavLink>
                    <NavLink
                        to={"/admin/createProduct"}
                        className={"header__link"}
                    >
                        <span>Admin</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
