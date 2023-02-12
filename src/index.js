module.exports = function check(str, bracketsConfig) {
  // your solution
  console.log(str);
  console.log(bracketsConfig);
  if (typeof str !== "string") {
    return false;
  }

  const brackets = bracketsConfig.flat();
  let open = [];
  let close = [];

  for (let i = 0; i < brackets.length; i += 1) {
    if (i % 2 === 0) {
      open.push(brackets[i]);
    } else {
      close.push(brackets[i]);
    }
  }
  const chars = str.split("");
  let stack = [];
  // Проходимся по строке, проверяя каждый ее символ (п.4).
  for (let i = 0; i < chars.length; i += 1) {
    let openIndex = open.indexOf(chars[i]);
    if (openIndex !== -1) {
      // Нашли открывающую скобку. Помещаем ее в стек (п.2).
      stack.push(chars[i]);
      continue;
    }
    let closeIndex = close.indexOf(chars[i]);
    if (closeIndex === openIndex) {
      openIndex = stack.pop();
    } else {
      return false;
    }
  }

  console.log(stack);
  // Проверяем дисбаланс открытых/закрытых скобок (п.5).
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
