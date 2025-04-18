import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className=" w-full bg-herbal-green text-white py-4 text-center shadow-lg h-auto overflow-x-hidden">
                <p className="text-lg">&copy; {new Date().getFullYear()} RawHerb. All Rights Reserved.</p>
                <div className="flex justify-center gap-6 mt-2">
                    <ul>
                        <li><NavLink to="/RawHerbCopy" className="hover:text-gray-200">Privacy Policy</NavLink></li>
                        <li><NavLink to="/RawHerbCopy/contact-us" className="hover:text-gray-200">Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;