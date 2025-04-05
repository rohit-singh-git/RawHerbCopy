import { useState } from "react";
import ProductList from "../components/ProductList";
import SimpleSlider from "../components/SimpleSlider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <>

            <form className="search-form flex justify-center m-6 p-6">
                <input type="text" placeholder="Search for products..." className="search-input bg-warm-beige rounded-2xl px-20 p-2 text-charcoal-grey" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value.toLowerCase()) }} />
            </form>

            <ProductList searchQuery={searchQuery} />

            {/* <SimpleSlider searchQuery={searchQuery} /> */}

        </>
    );
}

export default Home;
