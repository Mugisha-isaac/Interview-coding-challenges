// binary search implementation

function binarySearch(arr,start,target,end){
    if(start > end) return false;

    let mid = Math.floor((start + end)/2);
    if(arr[mid] == target) return true;
    if(target < arr[mid]){
        return binarySearch(arr,start,target,mid-1);
    }else{
        return binarySearch(arr,mid+1,target,end);
    }
};

// testing

var arr = [2, 6, 8, 10, 12, 14];
let target = 13;

console.log(binarySearch(arr,0,target,arr.length-1));