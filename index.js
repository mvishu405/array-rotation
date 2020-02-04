function rotateArray(arr, d) {
  for (let i = 0; i < d; i++) {
    let temp = arr[0];
    for (var j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[j] = temp;
  }
}

function sortArray(arr, $d) {
  for (let i = 0; i < arr.length - d; i++) {
    for (let j = i+1; j < arr.length - d; j++) {
      if(arr[i] < arr[j])
      {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7,9,-1, -505];
let d = 2;
rotateArray(arr, d);
sortArray(arr, d);
console.log(arr);