const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalArray = transpose(letters);
  const verticalJoin = verticalArray.map(ls => ls.join('')) 
  // console.log(horizontalJoin);
  let answer = false;
  for (l of horizontalJoin) {
      if (l.includes(word)) {
          answer = true;
      } 
  } 
  for (l of verticalJoin) {
      if (l.includes(word)) {
          answer = true;
      }
  }
  return answer;
}
const transpose = function (matrix) {
  let newArr = []

  for (let i = 0; i < matrix[0].length; i++) {
      newArr.push([]);
  }
  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
          newArr[c][r] = matrix[r][c]
      }
  }
  return newArr
};
module.exports = wordSearch