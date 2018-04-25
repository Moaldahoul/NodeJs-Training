function checkIfExist(data, search) {
    if (data.indexOf(search) !== -1) {
        console.log("Found it");
    } else {
        console.log("Ops, couldn't find it!!");
    }
}
/**
 * Function that search in a text if a word(s) exist
 * @param {string} data text to search into
 * @param {string} search words to search
 */
function checkLength(data, search) {
    if (data.length > 0) {
        if (data.length > search.length) {
            console.log('Data file is bigger and contain', data.length);
        } else {
            console.log('Search file is bigger');
        }
    } else {
        console.log("The file is Empty!!");
    }
}

module.exports = {
    checkIfExist: checkIfExist,
    checkLength: checkLength
};
/** 
 * Another way to export the function
module.exports = () =>{
    return {
    checkIfExist: checkIfExist,
    checkLength: checkLength
    }
};
*/