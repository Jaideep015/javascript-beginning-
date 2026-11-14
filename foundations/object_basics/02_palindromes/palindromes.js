const palindromes = function (str) {
  str = str.toLowerCase()
  let newText = str.replace(/\p{P}/gu, "").split(" ").join("")
  let text = ""
  for (let i = newText.length - 1; i >= 0; i--) {
    text += newText[i]
  }
  if (text === newText){
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
