import originalStock from "./originalStock.js";
import numberOfSoldProducts from "./calculateNumberOfSoldProducts.js";

function calculateProductsToSell(arrayOfTvs) {
    const stock = originalStock(arrayOfTvs);
    const soldProducts = numberOfSoldProducts(arrayOfTvs);
    return stock - soldProducts;
}

export default calculateProductsToSell;