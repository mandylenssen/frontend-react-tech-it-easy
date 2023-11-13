function originalStock (arrayOfTvs) {
    let stock= 0;
    for (let i = 0; i < arrayOfTvs.length; i++){
        stock = stock + arrayOfTvs[i].originalStock;
    }
    return stock;
}

export default originalStock;