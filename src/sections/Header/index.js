/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import Logo from "../../img/logo-complete.svg";

const Header = () => {
    return (
        <header className="container">
            <nav className="">
                <div className="justify-between items-center d-flex">
                    <div className="d-flex coopers-nav-left">
                        <div><img src={Logo} alt="Logo" /></div>
                    </div>

                    <div className="coopers-nav-right">
                        <a href="#" className="btn-black">entrar</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;