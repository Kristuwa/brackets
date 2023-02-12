module.exports = function check(str, bracketsConfig) {
  // your solution
  console.log(str);
  console.log(bracketsConfig);
  //   if (typeof str !== "string") {
  //     return false;
  //   }

  //   const brackets = bracketsConfig.flat();
  //   let open = [];
  //   let close = [];

  //   for (let i = 0; i < brackets.length; i += 1) {
  //     if (i % 2 === 0) {
  //       open.push(brackets[i]);
  //     } else {
  //       close.push(brackets[i]);
  //     }
  //   }
  //   const chars = str.split("");
  //   let stack = [];
  //   // Проходимся по строке, проверяя каждый ее символ (п.4).
  //   for (let i = 0; i < chars.length; i += 1) {
  //     let openIndex = open.indexOf(chars[i]);
  //     if (openIndex !== -1) {
  //       // Нашли открывающую скобку. Помещаем ее в стек (п.2).
  //       stack.push(chars[i]);
  //       continue;
  //     }
  //     let closeIndex = close.indexOf(chars[i]);
  //     if (closeIndex !== open.indexOf(stack[i - 1])) {
  //       return false;
  //     }
  //     openIndex = stack.pop();
  //   }

  //   console.log(stack);
  //   // Проверяем дисбаланс открытых/закрытых скобок (п.5).
  //   if (stack.length !== 0) {
  //     return false;
  //   }

  //   return true;
  if (typeof str !== "string") {
    return false;
  }

  const brackets = bracketsConfig.flat();
  console.log(brackets);

  const chars = str.split("");
  let stack = [];

  for (let i = 0; i < chars.length; i += 1) {
    let total = brackets.reduce((acc, item) => {
      if (chars[i] === item) {
        acc += 1;
      }
      acc += 0;
      return acc;
    }, 0);
    if (total === 2) {
      if (stack.indexOf(chars[i]) === -1) {
        stack.push(chars[i]);
      } else {
        if (stack.indexOf(chars[i]) !== stack.length - 1) {
          return false;
        }
        stack.splice(stack.indexOf(chars[i]), 1);
      }
      continue;
    }
    let index = brackets.indexOf(chars[i]);
    if (index % 2 === 0) {
      stack.push(chars[i]);
      continue;
    } else {
      if (index === brackets.indexOf(stack[stack.length - 1]) + 1) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  console.log(stack);

  if (stack.length !== 0) {
    return false;
  }

  return true;
};
