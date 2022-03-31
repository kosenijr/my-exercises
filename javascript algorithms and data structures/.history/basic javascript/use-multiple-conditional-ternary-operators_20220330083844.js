/*

*/

function checkSign(num) {

  // ternary conditional: (a > 0), (a < 0), (a === 0)
  return (num > 0) ? 'positive'
  : (num < 0) ? 'negative'
  : 'zero'

}

checkSign(10);