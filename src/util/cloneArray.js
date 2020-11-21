/**
 * Shallow copies an array
 * @param {array} array - The array to shallow copy
 * @returns {array} The shallow copied array
 */
function cloneArray(array) {
    return [...array];
}

module.exports = cloneArray;
