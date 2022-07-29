/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let newS = "";
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if (str[i - 1] === " " || str[i - 1] === undefined)
        newS += element.toUpperCase();
      else newS += element;
    }
    return newS;
  }

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('Молодость Всё Простит')); // "Молодость Всё Простит"