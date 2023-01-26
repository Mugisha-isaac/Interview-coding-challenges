// var str = 'mom';

// str.toLowerCase();
// var reversedStr = str.split('').reverse().join('');

// if(reversedStr === str){
//     console.log('this is a parlindrome');
// }else{
//     console.log('not a parlindrome');
// }



// function convertFirstLetter(str){
//     let sub1 = str.substring(0,1);
//     let sub2 = str.substring(1,str.length);
//     console.log(sub1.toUpperCase().concat(sub2));
// }

// convertFirstLetter("the quick brown fox");

// var str = "Mobile Application Development";

// var splittedStr = str.split(' ');
// let longestWord;

// for(let i=0; i<splittedStr.length-1; i++){
//     longestWord = splittedStr[0];
//     if(splittedStr[i].length > longestWord.length){
//         longestWord = splittedStr[i];
//     }
    
// }
// console.log(longestWord);




// var vowels = ['a','u','o','i','e'];
// var str = "Mobile Application Development";
// var count =0;

// for(let i=0; i<str.length; i++){
//     for(let j=0; j<vowels.length; j++){
//         if(str[i]=== vowels[j]){
//             count ++;
//         }
//     }
// }

// console.log(count);

// console.log(str.split(''));


// function countVowels(str){
//     let splittedStr = str.split();
// }


// var numbers = [1,2,3,4,5];

// var newArr = [];

// let lowest = numbers[0];
// let highest = numbers[numbers.length-1];
// // console.log(numbers.filter((num)=>num != lowest && num != highest));

// for(let i=0; i<numbers.length-1; i++){
//     if(numbers[i] < lowest){
//         lowest = numbers[i];
//     }
//     if(numbers[i]>highest){
//         highest = numbers[i];
//     }
// }

// var newArr = numbers.filter((num)=> num != lowest && num != highest);

// var secondLowest = newArr[0];
// var secondHighest = newArr[newArr.length-1];

// for(let j=0; j<newArr.length-1;j++){
//     if(newArr[j]< secondLowest){
//         secondLowest = newArr[j];
//     }
//     if(newArr[j]>secondHighest){
//         secondHighest = newArr[j];
//     }
// }

// console.log(secondLowest,secondHighest);