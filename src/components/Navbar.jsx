import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div className="w-full md:w-screen h-max bg-olive-green-dark py-3 px-4 md:py-4 md:px-8 flex justify-between items-center shadow-lg overflow-x-hidden">
            <Link to="/">
                <div className="flex justify-between items-center gap-2 md:gap-3 cursor-default">
                    <img src="./assets/images/logo.png" alt="logo" className="w-18 h-28 md:w-16 md:h-24" />
                    <div>
                        <span style={{ fontFamily: 'playfair' }} className="brand-name font-bold text-6xl md:text-7xl text-beige">Rawherb</span>
                        <p style={{ fontFamily: 'playfair' }} className="moto font-bold text-sm text-beige text-center">Raw and Real Organics</p>
                    </div>
                </div>
            </Link>

            <ul className="text-md md:text-lg">
                <li>
                    <NavLink
                        to="/"
                        className={"text-beige text-lg md:text-2xl italic font-medium"}
                    >
                        Home
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
