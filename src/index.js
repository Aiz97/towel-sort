module.exports = function towelSort (matrix) {
  if (matrix == null) return [];
  matrix.map((x,i) => i%2 != 0 ? x.reverse() : x );
  return sortedTowel = [].concat(...matrix);
}
