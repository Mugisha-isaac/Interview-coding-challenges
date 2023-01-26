// callback function
// function modifyArray(arr,callback){
//     arr.push(100);
//     callback();
// }

// let arr = [1,2,3,4,5];

// modifyArray(arr,()=>{
//     console.log("pushing 100 into array is done and new array is ", arr);
// });


// Reversing a string

// var str = "welcome to this javascript guide!";
// let newArr = [];

// var reversedSentence = reverseBySeparator(str,"");
// var reverseEachWord = reverseBySeparator(reversedSentence," ");
// console.log(reverseEachWord);

// function reverseBySeparator(str, separator){
//     return str.split(separator).reverse().join(separator);
// }



// finding weather an object is an array or not
// use toString method from object.prototype

// function greet(param){
//     if(typeof param === 'string'){
       
//     }
//     else{

//     }
// }

// checking type if type of an object is array:  object.prototype.toString.call(arrayList) === '[object Array]'  
//   const arrayList = [{name:'mugisha',age:20},{name:'test', age: 12}];

// //   console.log(Array.isArray(arrayList)); // true
// console.log(Object.prototype.toString.call(arrayList)); // [object Array]


// check if a number is integer

// if(num % 1 ===0);


// duplicating array

// function duplicate(arr){
//     return arr.concat(arr);
// }

// console.log(duplicate([1,2,3,4,5]));


// console.log(mul(2)(3)(4)) // 24
// console.log(mul(4)(3)(4)) // 48

// function mul(x){
//     return function(y){
//         return function(z){
//             return x*y*z;
//         }
//     }
// }

// console.log(mul(2)(3)(4));


// var addSix = createBase(6);
// addSix(10) // 16
// addSix(21) // 27

// function createBase(baseNumber){
//     return function(number){
//         return baseNumber + number;
//     }
// }

// var addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(21));

// function fizzBuss(){
//     for(let i=1;i<100;i++){
//         if(i%3 === 0){
//             console.log(i,"fizz");  
//         }
//         if(i%5 ===0){
//             console.log(i,"buzz");
//         }
//         if(i%3 === 0 && i%5 === 0){
//             console.log(i,"fizzbuzz");
//         }
//     }
// }

// fizzBuss();
