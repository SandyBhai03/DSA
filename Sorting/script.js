console.log("Radhey Radhey 🙏")
// #1 Insertion Sort
// function insertionSort(arr){
//     const n = arr.length;
    
// }

// ====================================================================
// #2 ~~~~~~~~~~~~~~ Selection Sort ~~~~~~~~~~~~~~~
function selectionSort(arr){
    const len = arr.length;
    for(let i = 0; i < len-1; i++){
        let sl = i;
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[sl]){
                sl = j;
            }
        }
        let temp = arr[i]; 
        arr[i] = arr[sl]; 
        arr[sl] = temp;
    }
    return arr

    // for(let i=0; i< len; i++){
    //     console.log(arr[i])
    // }
}


const arr = [4, 1, 5, 2, 3];
console.log(arr)
console.log(selectionSort(arr))


