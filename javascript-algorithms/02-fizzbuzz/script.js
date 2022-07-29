/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
  for (let i=1; i <= num; i++) {
   i%3===0 && i % 5 === 0 ? console.log('fizzbuzz'): i%3 === 0 ? console.log('fizz'): i%5 === 0 ? console.log('buzz') : console.log(i);
}
}
   
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(100));