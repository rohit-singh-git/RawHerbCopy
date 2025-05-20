import { useState } from "react";
import ProductList from "../components/ProductList";
import SimpleSlider from "../components/SimpleSlider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearch } from "react-icons/fa";

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <>

            <form className="search-form flex justify-center m-6 p-6">
                <input type="text" placeholder="Search for products..." className="search-input bg-warm-beige rounded-2xl px-20 p-2 bg-beige text-olive-green-dark font-bold" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value.toLowerCase()) }} />
                <FaSearch className="flex justify-center items-center m-3 text-beige"/>
            </form>

            <SimpleSlider />


            <ProductList searchQuery={searchQuery} />


        </>
    );
}

export default Home;
