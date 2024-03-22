
// let arr = [ {name: 'John', id: 123, marks : 98 },
// {name: 'Baba', id: 101, marks : 23 },
// {name: 'yaga', id: 200, marks : 45 },
// {name: 'Wick', id: 115, marks : 75 } ]
// let newArr = arr.map((item, ind) => {
//     return item.name.toUpperCase()
// })
// console.log(newArr);

// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let newArr = arr.filter((item) =>{
//     return item.length >= 5
// })
// console.log(newArr);

// HOMEWORK

// 1
// let number = [1,2,3,4,5];
// let newArr = number.map((item) =>{
//     return item**2
// })
// console.log(newArr);

// 2

// let number = [-1,2,-3,4,-5];
// let newArr = number.filter((item) =>{
//     return item < 0
// })
// console.log(newArr);

// 3 

// let number = [-1,[8,9],2,-3, [15,45] ,4,-5];
// let newArr = number.filter((item) =>{
//     return Array.isArray(item);
// })
// console.log(newArr);

// 4

// let number = [1,2,3,0,4,5];
// let newArr = number.reduce((acc, item) =>{
//     if(item !== 0){
//         console.log(item);
//         return acc.concat([item]);
//     }
//     else{
//         return acc
//     }
// }, [])
// console.log(newArr);

// 5

// let number = [1,2,3,0,4,5];
// let newArr = number.reduce((acc, item) =>{
//     if(item !== 0){
//         console.log(item);
//         return acc+item;
//     }
//     else{
//         return acc
//     }
// }, 0)
// console.log(newArr);

// 6

// function arrtekshir(arr){
//     for(i=0; i < arr.length-1; i++){
//         if(arr[i] === arr[i+1]){
//             return "Ha"
//         }
//     }
//     return "yo'q"; 
// }
// let arr = [1,2,3,3,0,4,5];

// console.log(arrtekshir(arr));

// 7

// function arrtekshir(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let i2 = i + 1; i2 < arr.length; i2++) {
//             if (arr[i] === arr[i2]) {
//                 return "Ha";
//             }
//         }
//     }
//     return "Yo'q";
// }

// let arr = [1, 2, 3, 6, 0, 3, 4, 5];

// console.log(arrtekshir(arr));


// 8 

// function arrayFill(a,b){
//     let result = []
//     for (let i = 0; i < b; i++) {
//        result.push(a)
//     //    console.log(result);
//     }
//     return result
// }
// console.log((arrayFill("x",5)));

// 9 

// function arrayFill(a,b){
//     let result = [];
//     let res = []
//     for (let i = 0; i < b; i++) {
//         res += a
//         result.push(res)
//     }
//     return result
// }
// console.log((arrayFill("x",5)));


// 10 

// function arrayFill(b){
//     let result = [];
//     let res = []
//     for (let i = 1; i < b; i++) {
//         res += i 
//         console.log(i);
//         result.push(res)
//     }
//     return result
// }
// console.log((arrayFill(5)));