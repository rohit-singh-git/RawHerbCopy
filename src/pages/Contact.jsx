import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <>
            <div className="w-screen md:w-full flex justify-center items-center min-h-screen m-5 bg-gray-900">
                <div className=" bg-gray-700 flex flex-col  justify-center items-center max-w-md w-full p-6 rounded-3xl shadow-lg">
                    <p className=" font-medium text-white text-3xl mb-6">Contact Us</p>
                    <div className="flex flex-col items-center space-y-4">
                        <a href="https://www.instagram.com/rawherb.official/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-6xl p-4 transition-transform duration-[0.2s] ease-[ease-in-out] hover:scale-[1.6] text-[#e4405f]" />
                        </a>
                        <a href="https://youtube.com/@chaiaurcode" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="text-6xl p-4 transition-transform duration-[0.2s] ease-[ease-in-out] hover:scale-[1.6] text-[#ff0000]" />
                        </a>
                        <a href="https://wa.me/9911406619" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-6xl p-4 transition-transform duration-[0.2s] ease-[ease-in-out] hover:scale-[1.6] text-[#25d366]" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;