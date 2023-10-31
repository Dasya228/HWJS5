
//1. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// let num =[1, 2, 3, 0, 4, 5, 6]
// function myFunction() {
//     let res = []
//     for (let i = 0; i < num.length; i++) {
//         let s = num[i]*num[i]
//         res.push(s)
//     }
//     return res
// }
// console.log(myFunction())


//2. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// let num = [1, 2, 3, 0, 4, 5, 6]
// function myFunction(){
//
//
//     for(let i=0;i<num.length;i++){
//         if(num[i]>0){
//             return true
//         }
//     } return false
// }
// console.log(myFunction())



//3.Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
// function myFunction(num){
//     for(let i=0;i<num.length;i++){
//         if (num[i] < 0) {
//             return true
//         }
//     } return false
//
// }
// console.log(myFunction([1, 2, 3, 0, 4, 5, 6]))



//4.Дан массив с числами. Оставьте в нем только отрицательные числа.
//первое решение
// let num =[1, 2, -3, 0, 4, 5, -6]
// function myFunction(){
//   return num.filter(el=>el<0)
//
// }
// console.log(myFunction())

//второе решение
// let num =[1, 2, -3, 0, 4, 5, -6]
// function myFunction(){
//     let res=[]
//     for(let i=0;i<num.length;i++){
//         if (num[i]<0){
//             res.push(num[i])
//         }
//     }
//     return res
// }
// console.log(myFunction())





//5.Дан массив с числами. Оставьте в нем только четные числа.
// function myFunction(num){
//     let res=[]
//     for(let i=0;i<num.length;i++){
//         if (num[i]%2===0 && num[i]!==0){   тут я задал num[i]!==0 так как хотел, чтобы компилятор игнорировал 0
//             res.push(num[i])
//         }
//     }return res
// }
//
// console.log(myFunction([1, -2, 3, 0, 4, -5, 6]))



//6. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// function myFunction(num){
//     let arr = []
//     for(let i=0;i<num.length;i++){
//         if (num[i].length>=5){
//             arr.push(num[i])
//         }
//     }return arr
// }
// console.log(myFunction(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']))


//7.Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// function myFunction(num){
//     let res = 0
//     for(let i=0;i<num.length;i++){
//         if(num[i]<0){
//             res++
//         }
//     } return `Кол-во отрицательных чисел ${res}`
// }
// console.log(myFunction([1, 2, -3, 0, -4, 5, -6]))




//8. [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']
// function myFunction(arr,str){
//    return arr.concat(str)
// }
// console.log(myFunction([1,2,3,4],['a','b','c','d']))


//9.  [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
// function myFunction(arr,str){
//     return arr.concat(str)
// }
// console.log(myFunction([2, 3, 4, 5],'hello world'))


//10.  [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
// function myFunction(arr,str){
//     return arr.concat(str.split(''))
// }
// console.log(myFunction([2, 3, 4, 5],'hello world'))



//11.  [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

// function myFunction(arr,str,arr1){
//     return arr.concat(str.split('')).concat(arr1)
// }
// console.log(myFunction([2, 3, 4, 5],'hello world',[2, 3, 4, 5]))



//12. FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
//
// function fizzBuzz(){
//     let res =[]
//     for(let i=0;i<=100;i++){
//         if (i%3===0){
//             console.log(i+' '+'Fizz')
//         } else if(i%5===0 && i%3!==0){
//             console.log(i+' '+'Buzz')
//         }
//
//     }
//
// }
// console.log(fizzBuzz())