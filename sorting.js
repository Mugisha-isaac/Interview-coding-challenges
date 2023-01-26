// bubble sort

// var numbers = [3,2,0,4,1];
   
//    let sorted = false;

//    while(!sorted){
//       sorted = true;
//       for(let i=0;i<numbers.length;i++){
//         if(numbers[i]<numbers[i-1]){
//             let temp = numbers[i];
//             numbers[i] = numbers[i-1];
//             numbers[i-1] = temp;
//             sorted = false;
//         }
//       }
//    }

//    console.log(numbers)



// quick sort

// pivot element, start,end
// swap
// partition
// Quick sort





const swap = (arr,firstIndex,secondIndex)=>{
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}