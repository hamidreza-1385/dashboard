import { faBell, faCircleUser, faLanguage, faMoon, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header ">
            <div className="up d-flex justify-content-between bg-light px-4 py-3 align-items-center rounded-4">
                <section className="d-flex">
                    <p className="icon-h"><FontAwesomeIcon icon={faUser}className="mx-2"/></p>
                    <p className="icon-h"><FontAwesomeIcon icon={faBell}className="mx-2"/></p>
                    <p className="icon-h"><FontAwesomeIcon icon={faMoon}className="mx-2"/></p>
                    <p className="icon-h"><FontAwesomeIcon icon={faLanguage}className="mx-2"/></p>
                </section>
                <section className="d-flex align-items-center">
                    <section><p className="py-0 my-0 mx-2">علی</p ><p className="py-0 my-0 mx-2">   کاربر   </p></section>
                    <FontAwesomeIcon icon={faCircleUser}className="mx-3"/>
                    </section>
            </div>
            <div className="d-flex down text-start my-2 p-3 rounded-4">
                <Link to={"/poshtibani"}><button className="mx-4 py-1 rounded-3 bg-primary text-white border-none p-2">پشتیبانی<FontAwesomeIcon className="mx-2" icon={faTicket}/></button></Link>
                <Link className="text-decoration-none" to={"/"}><p className="text-danger">خروج</p></Link>
            </div>
        </header>
    );
};

export default Header;