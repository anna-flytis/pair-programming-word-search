const transpose = function(matrix) {

  let array = [];

  for (let i = 0; i < matrix[0].length; i++) {
    array.push([]);

  };

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      array[c][r] = matrix[r][c];
    }
  }

  return array;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const transposedLetters = transpose(letters).map(ls => ls.join(''));
  for (let v of transposedLetters) {
    if (v.includes(word)) return true;
  }

  return false;
};




module.exports = wordSearch;