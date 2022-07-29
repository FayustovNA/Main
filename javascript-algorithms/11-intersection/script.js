/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

// function intersection(arr1, arr2) {
//     let intersect = arr1.filter(num => arr2.includes(num));
//     const uniq= new Set(intersect);
//     return uniqArr=Array.from(uniq);
// }


function intersection(arr1, arr2) {
    let uniqNew = [];
    arr1.forEach((item) => {
        arr2.forEach((item2) => {
            if (item === item2 && !uniqNew.includes(item)) {
                uniqNew.push(item);
            }
        });
    }); 
    return uniqNew;
};
   
    


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]));