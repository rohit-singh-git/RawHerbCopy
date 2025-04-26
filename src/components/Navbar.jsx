import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div className="w-full md:w-screen h-max bg-herbal-green py-3 px-4 md:py-4 md:px-8 flex justify-between items-center shadow-lg overflow-x-hidden">
            <Link to="/">
                <div className="flex justify-between items-center gap-2 md:gap-3 cursor-default">
                    <img src="./assets/images/logo1.png" alt="logo" className="w-16 h-18 md:w-18 md:h-20" />
                    <span className="font-bold text-xl md:text-4xl text-white">RawHerbCopy</span>
                </div>
            </Link>

            <ul className="text-md md:text-lg">
                <li>
                    <NavLink
                        to="/"
                        className={"text-gray-100 text-lg md:text-2xl italic font-medium"}
                    >
                        Home
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
