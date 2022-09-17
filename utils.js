// as per the instructions of the exam: the function looks as though the function is
    // 1. An Array
    // 2. the Array could be strings, numbers, or objects.  

function shuffleArray(array) {
    let arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    }
    return arrCopy
}

module.exports = {
    shuffleArray
}