import { faBell, faCircleUser, faLanguage, faMoon, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className="header">
            <div className="up d-flex justify-content-between bg-white px-4 py-3 align-items-center rounded-4">
                <section>
                    <FontAwesomeIcon icon={faUser}className="mx-2"/>
                    <FontAwesomeIcon icon={faBell}className="mx-2"/>
                    <FontAwesomeIcon icon={faMoon}className="mx-2"/>
                    <FontAwesomeIcon icon={faLanguage}className="mx-2"/>
                </section>
                <section className="d-flex align-items-center">
                    <section><p className="py-0 my-0 mx-2">علی</p ><p className="py-0 my-0 mx-2">   کاربر   </p></section>
                    <FontAwesomeIcon icon={faCircleUser}className="mx-3"/>
                    </section>
            </div>
            <div className="d-flex down text-start my-2 p-3 rounded-4">
                <button className="mx-4 py-1 rounded-3 bg-primary text-white border-none p-2">پشتیبانی<FontAwesomeIcon className="mx-2" icon={faTicket}/></button>
                <p className="text-danger">خروج</p>
            </div>
        </header>
    );
};

export default Header;