import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css"
import links from "../advert_links.json"
import { Link } from "react-router-dom";

function SimpleSlider() {

    var settings = {
        dots: true,
        className: "center",
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
    };

    return (

        <div className="w-full md:h-97 grid grid-cols-1 justify-between mb-5 md:mb-15 px-4 md:px-10">

            <Slider {...settings} className="m-2 pb-3">

                {links.images.map((item, index) => (
                    <div key={index} className="px-2">
                        <Link to={item.link}>
                            <img
                                src={item.src}
                                alt={`Product image ${index}`}
                                className="w-full h-auto md:h-95 object-cover rounded-md shadow-xl"
                            />
                        </Link>
                    </div>
                ))}

            </Slider>
        </div>

    );
}

export default SimpleSlider;
