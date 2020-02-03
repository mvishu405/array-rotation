function rotateArray(arr, d) {
    for(let i = 0; i < d; i++) {
        let temp = arr[0];
        for(var j = 0; j < (arr.length - 1); j++) {
            arr[j] = arr[j+1];
        }
        arr[j] = temp;
    }
}


let arr = [1,2,3,4,5,6,7];
rotateArray(arr, 3);
console.log(arr);