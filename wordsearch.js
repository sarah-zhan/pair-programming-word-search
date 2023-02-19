const wordSearch = function(matrix, word) {
  if (matrix.length === 0) return false;
  // Check horizontally
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].join('');
    if (row.includes(word)) {
      return true;
    }
  }

  // Check vertically
  for (let j = 0; j < matrix[0].length; j++) {
    let col = '';
    for (let i = 0; i < matrix.length; i++) {
      col += matrix[i][j];
    }
    if (col.includes(word)) {
      return true;
    }
  }

  return false;
};


module.exports = wordSearch;

