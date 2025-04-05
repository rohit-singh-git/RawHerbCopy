import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div className="w-full md:w-screen h-max bg-herbal-green py-3 px-3 md:py-4 md:px-8 flex justify-between items-center shadow-lg">
            <Link to="/RawHerbCopy/">
                <div className="flex items-center gap-1 md:gap-3 cursor-default">
                    <img src="/RawHerbCopy/assets/images/logo1.png" alt="logo" className="w-16 h-18 md:w-18 md:h-20" />
                    <span className="font-bold text-xl md:text-4xl text-white">RawHerbCopy</span>
                </div>
            </Link>

            <ul className="flex gap-2 md:gap-5 text-md md:text-lg">
                <li>
                    <NavLink
                        to="/RawHerbCopy/"
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
