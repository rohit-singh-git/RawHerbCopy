import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className=" w-full bg-olive-green-dark text-beige py-4 text-center shadow-lg h-auto overflow-x-hidden">
                <p className="text-lg">&copy; {new Date().getFullYear()} RawHerb. All Rights Reserved.</p>
                <div className="flex justify-center gap-6 mt-2">
                    <ul>
                        <li><NavLink to="/" className="hover:text-gray-200">Privacy Policy</NavLink></li>
                        <li><NavLink to="/contact-us" className="hover:text-white">Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;