/////////////////////////
// criptografia de textos
//// novembro/2022///////
////// by Bart Silva/////
function criptText(text) {
    let result1 = ""
    let result2 = ""
    let result3 = ""
    for (let ind = 0; ind < text.length; ind++) {
      result1 += text.charCodeAt(ind)
      if (ind + 1 < text.length) result1 += "-"
    }
    for (let ind = 0; ind < 20; ind++) {
      result2 += numRanI(11, 99)
      result3 += numRanI(11, 99)
      if (ind + 1 < 20) {
        result2 += "-"
        result3 += "-"
      }
    }
    return result3 + result1 + result2
  
    // número randômico
    function numRanI(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
  ///////////////////
  //descriptografando
  ///////////////////
  function decriptText(text) {
    const size = text.length - (59 * 2)
    let mVar = text.slice(59, size + 59)
    mVar = mVar.split("-")
    let result = ""
    for (let ind = 0; ind < mVar.length; ind++) {
      result += String.fromCharCode(mVar[ind])
    }
    return result
  }
  
