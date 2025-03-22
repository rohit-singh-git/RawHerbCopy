import React from "react";
import Slider from "react-slick";
// import products from "../products.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import "../../src/App.css"
import { useState, useEffect } from "react";
import axios from "axios";

function SimpleSlider({ searchQuery }) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/products")
            .then((response) => {
                // console.log("Api response : ", response.data.message)
                setProducts(response.data.message)
                setLoading(false)

            })
            .catch((error) => {
                console.error("Error fetching products!", error)
                setError("Failed to load products!")
                setLoading(false)
            })
    }, [])

    var settings = {
        dots: true,
        className: "center",
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    };

    const filteredProducts = Array.isArray(products) ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    return (

        <div className=" grid grid-cols-1 justify-between gap-4 md:gap-6 lg:gap-8 p-6 ml-5 mr-7">
            <Slider {...settings}>


                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className="col-span-3 text-center text-red-500 text-lg">No products found</p>
                )}



            </Slider>
        </div>

    );
}

export default SimpleSlider;
