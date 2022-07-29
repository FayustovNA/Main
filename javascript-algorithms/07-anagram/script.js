/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    let str1_ = str1.toLowerCase();
    let str2_ = str2.toLowerCase();
m1 = str1_.split('').sort().join('');
console.log(m1);
m2 = str2_.split('').sort().join('');
console.log(m2);
if (str1_.lenght === str2_.lenght && str1_ !== str2_) {
return m1===m2;
    } else {
        return false;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false