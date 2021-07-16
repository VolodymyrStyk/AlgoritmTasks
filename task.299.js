// 299. Даны действительные числа a1, ..., a26.
// Требуется домножить все члены этой последовательности на квадрат ее наименьшего члена,если a1 ≥ 0,
// и на квадрат ее наибольшего члена, если a1< 0.т ее наименьшего члена.

const arr1 = [1, 3, 4, 6, 3, 1, 4, 8, 0, 6, 4, 31, -12, 4, 8, 2, 5, 44, 2, 87, 4, 5, 7, 2.2, 5.4, 6];
const arr2 = [-1, 3, 4, 6, 3, 1, 4, 8, 0, 6, 4, 31, -12, 4, 8, 2, 5, 44, 2, 87, 4, 5, 7, 2.2, 5.4, 6];

const mult = (arr) => {
    console.log(arr[0]);

    if (arr[0] >= 0) {
        const min = Math.min(...arr) ** 2;
        arr = arr.map(value => value * min);

        console.log(min);
        console.log(arr);
    }

    if (arr[0] < 0) {
        const max = arr.sort((a, b) => b - a)[0] ** 2;
        arr = arr.map(value => value * max);

        console.log(max);
        console.log(arr);
    }
}

mult(arr1);
console.log("************************************************");
mult(arr2);



// --------------------------------------------------------------
// const generateArr = (arrL = 26,min = 0, max = 10) => {
//     let arr = [];
//     for (let i = 0; i < arrL; i++) {
//         arr.push(Math.random() * (max - min + 1));
//     }
//     return arr;
// }
// let array = generateArr();
// console.log(array);
