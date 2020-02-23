module.exports = function reverse (n) {
  if (n < 0) {
    let positivNum = -n + ""
    return +positivNum.split("").reverse().join("")  
  }
  let str = n + ""
  return +str.split("").reverse().join("")
}
