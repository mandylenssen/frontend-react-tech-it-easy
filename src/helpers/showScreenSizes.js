function showScreenSizes(screenSize) {
    let result = "";
    for (let i = 0; i < screenSize.length; i++) {
        result += screenSize[i] + " inch (" + (screenSize[i]*2.54) + "cm) ";
        if (i < screenSize.length -1) {
            result += "| "
        }
    }
    return result;
}

export default showScreenSizes;