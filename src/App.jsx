import './App.css';
import calculateNumberOfSoldProducts from "./helpers/calculateNumberOfSoldProducts.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import originalStock from "./helpers/originalStock.js";
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";
import showProductName from "./helpers/showProductName.js";
import showProductPrice from "./helpers/showProductPrice.js";
import showScreenSizes from "./helpers/showScreenSizes.js";
import check from "./assets/check.png"
import minus from "./assets/minus.png"


function App() {

    function mostSoldFirst() {
        console.log("Meest verkocht eerst")
    }

    function cheapestFirst() {
        console.log("Goedkoopste eerst")
    }

    function mostSuitedForSport() {
        console.log("Meest geschikt voor sport eerst")
    }

    return (
        <main>
            <h1>Tech it easy dashboard</h1>

            <h2>Verkoopoverzicht</h2>
            <section className="sales-overview-section">
                <div className="sales-overview-panel sold-products">
                    <h3>Aantal verkochte producten</h3>
                    <h4>{calculateNumberOfSoldProducts(inventory)}</h4>
                </div>
                <div className="sales-overview-panel original-stock">
                    <h3>Aantal ingekochte producten</h3>
                    <h4>{originalStock(inventory)}</h4>
                </div>
                <div className="sales-overview-panel products-to-sell">
                    <h3>Aantal te verkopen producten</h3>
                    <h4>{calculateProductsToSell(inventory)}</h4>
                </div>
            </section>


            <section>
                <h2>Best verkochte tv</h2>
                <div className="best-product-panel">
                    <img src={bestSellingTv.sourceImg} alt="tv-image" className="tvImage"/>
                    <div className="best-product-text-area">
                        <h3>{showProductName(bestSellingTv)}</h3>
                        <h4>{showProductPrice(bestSellingTv)}</h4>
                        <h5>{showScreenSizes(bestSellingTv.availableSizes)}</h5>
                        <ul className="options">
                            <li><img src={check} alt="check-icon" className="icons"/>wifi</li>
                            <li><img src={minus} alt="minus-icon" className="icons"/>speech</li>
                            <li><img src={check} alt="check-icon" className="icons"/>hdr</li>
                            <li><img src={check} alt="check-icon" className="icons"/>bluetooth</li>
                            <li><img src={minus} alt="minus-icon" className="icons"/>ambilight</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="all-tvs">
                <h2>Alle tvs</h2>
                <div className="button-section">
                    <button type={"button"} onClick={mostSoldFirst}>Meest verkocht eerst</button>
                    <button type={"button"} onClick={cheapestFirst}>Goedkoopste eerst</button>
                    <button type={"button"} onClick={mostSuitedForSport}>Meest geschikt voor sport eerst</button>
                </div>
            </section>
        </main>
    )
}


export default App
