

function binarySearch(arr,x){
    let low = arr[0];
    let high = arr[arr.length-1];
    let mid = arr[(low+high)/2];

    if(x == mid){
        console.log("found at mid");
    }
    if(x<mid){
        high = mid-1;
        for(let i=0; i<high; i++){
            if(x == arr[i]){
                console.log(x,"is found at position ", arr[i]);
            }
        }
    }
   if(x>mid){
        for(let j=mid+1; j<arr.length-1; j++){
            if(x == arr[j]){
                console.log(x,"is found at position ", arr[j]);
            }
        }
    }
}
var arr = [-6,-2,4,8,20];

binarySearch(arr,4);