function calculateNumberOfSoldProducts (arrayOfTvs) {
    let numberOfTvs= 0;
    for (let i = 0; i < arrayOfTvs.length; i++){
       numberOfTvs = numberOfTvs + arrayOfTvs[i].sold;
    }
    return numberOfTvs;
}

export default calculateNumberOfSoldProducts;