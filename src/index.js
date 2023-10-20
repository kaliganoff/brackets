module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    for (let config of bracketsConfig) {
      if (str[i] === config[0]) {
        if (config[0] === config[1]) {
          if (stack.length === 0 || config[0] !== stack[stack.length - 1]) {
            stack.push(str[i]);
          } else {
            stack.pop();
          }
        } else {
          stack.push(str[i]);
        }
      } else if (str[i] === config[1]) {
        if (stack.length === 0 || config[0] !== stack.pop()) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
