module.exports = function check(str, bracketsConfig) {
  let stack = []
  let brackets ={
    ")":"(",
    "}":"{",
    "]":"[",
  }
  for (let i = 0; i < str.length; i++) {
  const current = str[i]
    if(isClosedBracket(current)){
      if(brackets[current] !== stack.pop()) return false
    } else{
      stack.push(current)
    }
  }
  return stack.length == 0;
}
function isClosedBracket(char){
    return [")","}","]"].indexOf(char)>-1
}
