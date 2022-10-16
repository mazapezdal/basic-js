const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let sum = 0;
  for (i = 0; i < matrix.length; i++) {
    if (matrix[i] != null) {
      for (n = 0; n < matrix[i].length; n++) {
        if (matrix[i][n] === '^^') {
          sum = sum + 1;
        }
      }
    }
  }

  return sum;
}

module.exports = {
  countCats
};
